// const { successResult } = require('../../utils')
const { User } = require('../../models')

const signOut = async(req, res) => {
  const { _id } = req.user
  await User.findByIdAndUpdate(_id, { token: null })
  res.json({
    status: 'success',
    code: 200,
    message: 'Success signout'
  })
}
module.exports = signOut
