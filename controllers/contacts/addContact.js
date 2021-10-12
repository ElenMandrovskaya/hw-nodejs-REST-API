const { successResult } = require('../../utils')
const { Contact } = require('../../models')

const addContact = async(req, res) => {
  const result = await Contact.create(req.body)
  successResult(res, { result }, 201)
}

module.exports = addContact
