const { NotFound } = require('http-errors')
const { successResult } = require('../../utils')
const { Contact } = require('../../models')

const removeContact = async(req, res) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndDelete(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { message: 'Success delete' })
}

module.exports = removeContact
