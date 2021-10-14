const { successResult } = require('../../utils')
const { User } = require('../../models')

const signIn = async(req, res) => {
  const result = await User.find({}, '_id name email phone favorite')
  successResult(res, { result })
}

module.exports = signIn
