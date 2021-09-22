const fs = require('fs/promises')
const contactsPath = require('./contactsPath.js')

const updateContacts = async (newContact) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContact))
}

module.exports = updateContacts
