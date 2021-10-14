const express = require('express')

const { joiSchema, updFavoriteJoiSchema } = require('../../models/contact')
const { controllerWrapper, validation } = require('../../middlewares')
const { getAllContacts, getContactById, addContact, updateById, removeContact, updFavorite } = require('../../controllers/contacts')

const router = express.Router()

router.get('/', controllerWrapper(getAllContacts))

router.get('/:contactId', controllerWrapper(getContactById))

router.post('/', validation(joiSchema), controllerWrapper(addContact))

router.put('/:contactId', validation(joiSchema), controllerWrapper(updateById))

router.delete('/:contactId', controllerWrapper(removeContact))

router.patch('/:contactId/favorite', validation(updFavoriteJoiSchema), controllerWrapper(updFavorite))

module.exports = router
