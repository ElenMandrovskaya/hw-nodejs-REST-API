const Joi = require('joi')

const contactSchema = Joi.object({
  name: Joi.string().regex(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().regex(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/).required(),
})

module.exports = contactSchema
