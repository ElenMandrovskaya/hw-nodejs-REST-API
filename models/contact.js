const { Schema, model } = require('mongoose')
const Joi = require('joi')

const nameRegEx = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
const phoneRegEx = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    match: nameRegEx
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    match: phoneRegEx
  },
  favorite: {
    type: Boolean,
    default: false,
  }
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  name: Joi.string().regex(nameRegEx).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().regex(phoneRegEx).required(),
  favorite: Joi.boolean()
})

const updFavoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required()
})

const Contact = model('contact', contactSchema)

module.exports = {
  joiSchema,
  updFavoriteJoiSchema,
  Contact
}
