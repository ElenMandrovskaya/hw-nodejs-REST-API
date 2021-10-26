const multer = require('multer')
const path = require('path')

const tempDir = path.join(__dirname, '../', 'temp')

const multerSet = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    filesize: 3072
  }
})
const uploadFiles = multer({
  storage: multerSet
})

module.exports = uploadFiles
