const { BadRequest } = require('http-errors')
const { User } = require('../../models')
const { sendEmail } = require('../../utils')

const verifyResend = async(req, res) => {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Missing required field email',
    })
  }
  const user = await User.findOne({ email })
  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }

  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a href='http://localhost:3000/api/auth/verify/${user.verifyToken}' target='_blank'>Please confirm your email</a>`
  }
  await sendEmail(mail)

  res.status(200).json({
    status: 'Success',
    code: 200,
    message: 'Verification email sent again'
  })
}

module.exports = verifyResend
