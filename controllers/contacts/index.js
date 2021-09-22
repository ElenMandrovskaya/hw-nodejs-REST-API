const getAllContacts = require('./getAllContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const removeContact = require('./removeContact')
const updateById = require('./updateById')

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateById,
  removeContact
}
