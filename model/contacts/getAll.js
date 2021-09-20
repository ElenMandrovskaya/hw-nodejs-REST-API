const fs = require('fs/promises')
const contactsPath = require('./contactsPath.js')

const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8')
  return JSON.parse(data)
}
module.exports = getAllContacts
