// const { successResult } = require('../../utils')
const { Conflict } = require('http-errors')
const { User } = require('../../models')

const signUp = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('User already exists')
  }
  const result = await User.create(req.body)
  res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'User was signed up successfully'
  })
}

module.exports = signUp
