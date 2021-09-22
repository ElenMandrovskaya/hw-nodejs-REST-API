const { NotFound } = require('http-errors')
const { successResult } = require('../../utils')
const contactOperations = require('../../model/contacts')

const updateById = async(req, res) => {
  const { contactId } = req.params
  const result = await contactOperations.updateById(contactId, req.body)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { result })
}

module.exports = updateById
