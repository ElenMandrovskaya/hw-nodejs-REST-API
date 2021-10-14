const { Schema, model } = require('mongoose')
const Joi = require('joi')

// const nameRegEx = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
// const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

const userSchema = Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     match: nameRegEx
//   },
  email: {
    type: String,
    required: [true, 'Email is required'],
    // unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    // match: passwordRegEx,
    minlegth: 6
  },
  // subscription: {
  //   type: String,
  //   enum: ['starter', 'pro', 'business'],
  //   default: 'starter'
  // },
  // token: {
  //   type: String,
  //   default: null,
  // },
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
//   name: Joi.string().regex(nameRegEx).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).required(),
  // .regex(passwordRegEx)
})

const User = model('user', userSchema)

module.exports = {
  joiSchema,
  User
}
