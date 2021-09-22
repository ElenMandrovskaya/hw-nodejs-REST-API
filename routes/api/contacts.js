const express = require('express')

const { contactSchema } = require('../../schemas')
const { controllerWrapper, validation } = require('../../middlewares')
const { getAllContacts, getContactById, addContact, updateById, removeContact } = require('../../controllers/contacts')

const router = express.Router()

router.get('/', controllerWrapper(getAllContacts))

router.get('/:contactId', controllerWrapper(getContactById))

router.post('/', validation(contactSchema), controllerWrapper(addContact))

router.put('/:contactId', validation(contactSchema), controllerWrapper(updateById))

router.delete('/:contactId', controllerWrapper(removeContact))

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
