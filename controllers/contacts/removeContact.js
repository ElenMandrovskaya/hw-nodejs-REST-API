const { NotFound } = require('http-errors')
const { successResult } = require('../../utils')
const contactOperations = require('../../model/contacts')

const removeContact = async(req, res, next) => {
  const { contactId } = req.params
  const result = await contactOperations.removeContact(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { message: 'Success delete' })
}

module.exports = removeContact
