const getAllContacts = require('./getAll.js')
const updateContacts = require('./updateContacts.js')

const removeContact = async (contactId) => {
  const contacts = await getAllContacts()
  const index = contacts.findIndex((contact) => String(contact.id) === String(contactId))
  if (index === -1) {
    return null
  }
  contacts.splice(index, 1)
  await updateContacts(contacts)
  return 'Success remove'
}

module.exports = removeContact
