const { NotFound } = require('http-errors')
const { successResult } = require('../../utils')
const { Contact } = require('../../models')

const updateById = async(req, res) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { result })
}

module.exports = updateById
