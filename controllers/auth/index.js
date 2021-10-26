const signUp = require('./signUp')
const signIn = require('./signIn')
const signOut = require('./signOut')
const getCurrent = require('./getCurrent')
const avatars = require('./avatar')
const verify = require('./verify')
const verifyResend = require('./verifyResend')

module.exports = {
  signUp,
  signIn,
  signOut,
  getCurrent,
  avatars,
  verify,
  verifyResend
}
