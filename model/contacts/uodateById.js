const getAllContacts = require('./getAll.js')
const updateContacts = require('./updateContacts.js')

const updateById = async(contactId, body) => {
  const contacts = await getAllContacts()
  const index = contacts.findIndex(contact => String(contact.id) === String(contactId))
  if (index === -1) {
    return null
  }
  const updateContact = { ...contacts[index], ...body }
  contacts[index] = updateContact
  await updateContacts(contacts)
  return updateContact
}

module.exports = updateById
