const { nanoid } = require('nanoid')
const getAllContacts = require('./getAll.js')
const updateContacts = require('./updateContacts.js')

const addContact = async (data) => {
  const contacts = await getAllContacts()
  const newContact = { id: nanoid(), ...data }
  contacts.push(newContact)
  await updateContacts(contacts)
  return newContact
}

module.exports = addContact
