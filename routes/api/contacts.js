const express = require('express')
const contactsOperations = require('../../model/contacts')

const router = express.Router()
// const { contactSchema } = require('../../schemas')

router.get('/', async(req, res, next) => {
  try {
    const contacts = await contactsOperations.getAllContacts()
    res.json({
      status: 'success',
      code: 200,
      data: { result: contacts }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  console.log(req)
  try {
    const { contactId } = req.params
    const result = await contactsOperations.getContactById(contactId)
    if (!result) {
      const error = new Error(`Contact with id=${contactId} not found`)
      error.status = 404
      throw error
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const result = await contactsOperations.addContacts()
    req.status(201).json()
    res.json({ message: 'template message' })
  } catch (error) {
    next(error)
  }
})

// router.delete('/:contactId', async (req, res, next) => {
//   // res.json({ message: 'template message' })
//   try {
//     // const { id } = req.params
//     // const result = await
//     // if (!result) {
//     //   return
//     // }
//     res.json()
//   } catch (error) {
//     next(error)
//   }
// })

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
