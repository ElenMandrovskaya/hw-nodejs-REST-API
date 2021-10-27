const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
const { User } = require('../../models')
const { sendEmail } = require('../../utils')

const signUp = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('User already exists')
  }
  const verifyToken = nanoid()
  const newUser = new User({
    email,
    verifyToken
  })
  newUser.setPassword(password)
  newUser.setAvatar(gravatar.url(email))
  await newUser.save()

  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a href='http://localhost:3000/api/auth/verify/${verifyToken}' target='_blank'>Please confirm your email</a>`
  }
  await sendEmail(mail)
  res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'User was signed up successfully'
  })
}

module.exports = signUp
