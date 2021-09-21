const express = require('express')

const { contactSchema } = require('../../schemas')
const { controllerWrapper, validation } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAllContacts))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', validation(contactSchema), controllerWrapper(ctrl.addContact))

router.put('/:contactId', validation(contactSchema), controllerWrapper(ctrl.updateById))

router.delete('/:contactId', controllerWrapper(ctrl.removeContact))

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
