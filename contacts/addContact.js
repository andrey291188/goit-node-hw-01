const {nanoid} = require("nanoid")
const listContacts = require("./listContacts")
const updateContacts = require("./updateContacts")

const addContact = async (addName, addEmail, addPhone) => {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name: addName,
        addEmail: addEmail,
        phone: addPhone
    };
    contacts.push(newContact);
    await updateContacts(contacts)
    return newContact
}

module.exports = addContact