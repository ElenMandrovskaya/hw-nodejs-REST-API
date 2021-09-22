const { NotFound } = require('http-errors')
const { successResult } = require('../../utils')
const contactOperations = require('../../model/contacts')

const getContactById = async(req, res) => {
  const { contactId } = req.params
  const result = await contactOperations.getContactById(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { result })
}
module.exports = getContactById
