const { successResult } = require('../../utils')
const contactOperations = require('../../model/contacts')

const addContact = async(req, res) => {
  const result = await contactOperations.addContact(req.body)
  successResult(res, { result }, 201)
}

module.exports = addContact
