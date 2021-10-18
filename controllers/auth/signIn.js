// const { successResult } = require('../../utils')
const { NotFound, BadRequest } = require('http-errors')
// const bcrypt = require('bcryptjs')
const { User } = require('../../models')

const signIn = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw new NotFound(`User with such Email ${email} was not found`)
  }
  if (!user.comparePassword(password)) {
    throw new BadRequest('Invalid password')
  }
  const token = 'eqwewer.errggeger.gdfggdfg'
  res.json({
    status: 'success',
    code: 200,
    data: {
      token
    }
  })
}

module.exports = signIn
