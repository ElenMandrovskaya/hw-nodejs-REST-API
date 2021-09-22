const { successResult } = require('../../utils')
const contactOperations = require('../../model/contacts')

const getAllContacts = async(req, res) => {
  const result = await contactOperations.getAllContacts()
  successResult(res, { result })
}

module.exports = getAllContacts
