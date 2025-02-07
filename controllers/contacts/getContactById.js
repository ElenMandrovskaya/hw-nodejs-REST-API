const { NotFound } = require('http-errors')
const { successResult } = require('../../utils')
const { Contact } = require('../../models')

const getContactById = async(req, res) => {
  const { contactId } = req.params
  const result = await Contact.findById(contactId, '_id name email phone favorite')
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { result })
}
module.exports = getContactById
