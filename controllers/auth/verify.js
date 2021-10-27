const { NotFound } = require('http-errors')
const { User } = require('../../models')

const verify = async(req, res) => {
  const { verifyToken } = req.params
  const user = await User.findOne({ verifyToken })
  if (!user) {
    throw new NotFound('User is not verified')
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verifyToken: null
  })
  res.json({
    status: 'Success',
    code: 200,
    message: 'Email is confirmed successfully'
  })
}

module.exports = verify
