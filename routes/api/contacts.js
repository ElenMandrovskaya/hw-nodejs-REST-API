const express = require('express')
const router = express.Router()
const { contactSchema} = require('../../schemas')

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperation.getAll()
    res.json({ message: 'template message' })
  }
  catch (error) {
    console.log(error)
    // res.status(500).json({
    //   status: 'error',
    //   code: 500,
    //   message: 'Server error'
    // })
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await await contactsOperation.getContactsById();
    if (!result) {
      const error = new Error(`not found ${id}`);
      error.status = 404;
      // res.status(404).json(``)
      return
    }
    res.json({ message: 'template message' })
  }
  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const result = await contactsOperations.addContacts();
    req.status(201).json()
    res.json({ message: 'template message' })
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  // res.json({ message: 'template message' })
  try {
    const { id } = req.params;
    const result = await
    if (!result) {
      return
    }
    res.json()
  }
  catch (error) {
    next(console.error();)
  }
})

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
