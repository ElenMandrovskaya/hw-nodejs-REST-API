const { NotFound } = require('http-errors')

const { successResult } = require('../utils')
const contactOperations = require('../model/contacts')

const getAllContacts = async(req, res) => {
  const result = await contactOperations.getAllContacts()
  successResult(res, { result })
}

const getContactById = async(req, res) => {
  const { contactId } = req.params
  const result = await contactOperations.getContactById(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { result })
}

const addContact = async(req, res) => {
  const result = await contactOperations.addContact(req.body)
  successResult(res, { result }, 201)
}

const updateById = async(req, res) => {
  const { contactId } = req.params
  const result = await contactOperations.updateById(contactId, req.body)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { result })
}

const removeContact = async(req, res, next) => {
  const { contactId } = req.params
  const result = await contactOperations.removeContact(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  successResult(res, { message: 'Success delete' })
}

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateById,
  removeContact
}
