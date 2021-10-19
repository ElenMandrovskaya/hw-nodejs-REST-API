const express = require('express')
const { controllerWrapper, validation, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../models/user')
const { signUp, signIn, signOut, getCurrent } = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiSchema), controllerWrapper(signUp))

router.post('/signin', validation(joiSchema), controllerWrapper(signIn))

router.get('/signout', authenticate, controllerWrapper(signOut))

router.get('/current', authenticate, controllerWrapper(getCurrent))

module.exports = router
