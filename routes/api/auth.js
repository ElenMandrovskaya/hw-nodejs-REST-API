const express = require('express')
const { controllerWrapper } = require('../../middlewares')
const { signUp, signIn, signOut } = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', controllerWrapper(signUp))

router.post('/signin', controllerWrapper(signIn))

router.get('/signout', controllerWrapper(signOut))

module.exports = router
