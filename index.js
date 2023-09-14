const contactsOperations = require("./contacts/contacts.js");
const {program} = require("commander")

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact whit id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
        const deleteContact = await contactsOperations.removeContact(id)
        if (!deleteContact) {
            throw new Error(`Contact whit id=${id} not found`);
          }
          console.log(deleteContact)
          break
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv)

