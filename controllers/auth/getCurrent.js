const { Unauthorized } = require('http-errors')
const { User } = require('../../models')

const getCurrent = async(req, res) => {
  const { _id } = req.user
  const user = await User.findById(_id, '_id email subscription')
  if (!user) {
    throw new Unauthorized('Not authorized')
  }
  res.json({
    status: 'success',
    code: 200,
    data: user,
  })
}

module.exports = getCurrent
