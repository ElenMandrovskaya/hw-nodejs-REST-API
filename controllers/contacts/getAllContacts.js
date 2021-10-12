const { successResult } = require('../../utils')
const { Contact } = require('../../models')

const getAllContacts = async(req, res) => {
  const result = await Contact.find({}, '_id name email phone favorite')
  successResult(res, { result })
}

module.exports = getAllContacts
