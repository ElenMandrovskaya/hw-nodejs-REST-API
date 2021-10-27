const sgMail = require('@sendgrid/mail')
const { SENDGRID_KEY } = process.env

sgMail.setApiKey(SENDGRID_KEY)

const sendEmail = async(mail) => {
  const email = { ...mail, from: 'e.mandrovska@gmail.com' }
  await sgMail.send(email)
}

module.exports = sendEmail
