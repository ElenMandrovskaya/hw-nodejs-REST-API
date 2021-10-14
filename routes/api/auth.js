const express = require('express')
const { controllerWrapper, validation } = require('../../middlewares')
const { joiSchema } = require('../../models/user')
const { signUp, signIn, signOut } = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiSchema), controllerWrapper(signUp))

router.post('/signin', validation(joiSchema), controllerWrapper(signIn))

router.get('/signout', controllerWrapper(signOut))

module.exports = router
