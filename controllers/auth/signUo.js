const { successResult } = require('../../utils')
const { User } = require('../../models')

const signUp = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }, '_id email password')
  successResult(res, { user })
}

module.exports = signUp
