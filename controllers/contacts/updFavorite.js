const { NotFound } = require('http-errors')
const { successResult } = require('../../utils')
const { Contact } = require('../../models')

const updFavorite = async(req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { result })
}

module.exports = updFavorite
