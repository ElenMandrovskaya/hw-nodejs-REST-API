const getAllContacts = require('./getAll.js')
const getContactById = require('./getContactById.js')
const addContact = require('./addContact.js')
const removeContact = require('./removeContact.js')
const updateContacts = require('./updateContacts.js')
const updateById = require('./uodateById')

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContacts,
  updateById
}
