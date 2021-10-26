const express = require('express')
const { controllerWrapper, validation, authenticate, uploadFiles } = require('../../middlewares')
const { joiSchema } = require('../../models/user')
const { signUp, signIn, signOut, getCurrent, avatars, verify, verifyResend } = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiSchema), controllerWrapper(signUp))

router.post('/signin', validation(joiSchema), controllerWrapper(signIn))

router.get('/signout', authenticate, controllerWrapper(signOut))

router.get('/current', authenticate, controllerWrapper(getCurrent))

router.patch('/avatar', authenticate, uploadFiles.single('avatar'), controllerWrapper(avatars))

router.get('/verify/:verifyToken', controllerWrapper(verify))

router.post('/verify', controllerWrapper(verifyResend))

module.exports = router
