const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { User } = require('../../models')

const signUp = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('User already exists')
  }
  const newUser = new User({ email })
  newUser.setPassword(password)
  newUser.setAvatar(gravatar.url(email))
  await newUser.save()
  res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'User was signed up successfully'
  })
}

module.exports = signUp
