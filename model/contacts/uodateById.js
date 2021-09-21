const getAllContacts = require('./getAll.js')
const updateContacts = require('./updateContacts.js')

const updateById = async(id, body) => {
  const contacts = await getAllContacts()
  const index = contacts.findIndex(contact => contact.id === Number(id))
  if (index === -1) {
    return null
  }
  const updateContact = { ...contacts[index], ...body }
  contacts[index] = updateContact
  await updateContacts(contacts)
  return updateContact
}

module.exports = updateById
