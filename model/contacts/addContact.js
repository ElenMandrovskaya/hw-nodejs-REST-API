const nanoid = require('nanoid')
const contactsOperations = require('./index')

const addContact = async (name, email, phone) => {
  const contacts = await contactsOperations.getAllContacts()
  const newContact = { name, email, phone, id: nanoid() }
  contacts.push(newContact)
  await contactsOperations.updateContacts(contacts)
}

module.exports = addContact
