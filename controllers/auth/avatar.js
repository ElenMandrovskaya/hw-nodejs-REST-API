const fs = require('fs/promises')
const Jimp = require('jimp')
const path = require('path')
const { User } = require('../../models')
const { successResult } = require('../../utils')

const avatarDir = path.join(__dirname, '../../', 'public/avatars')

const avatars = async (req, res) => {
  const { originalname, path: tempDir } = req.file
  try {
    const [extention] = originalname.split('.').reverse()

    const originalFile = await Jimp.read(tempDir)
    await originalFile.resize(250, 250).writeAsync(tempDir)

    const newFileName = `user_${req.user._id}.${extention}`
    const resultDir = path.join(avatarDir, newFileName)

    await fs.rename(tempDir, resultDir)
    const avatar = path.join('/avatars', newFileName)
    console.log(avatar)
    const { avatarUrl } = await User.findByIdAndUpdate(
      req.user._id,
      { avatarUrl: avatar },
      { new: true }
    )
    successResult(res, { avatarUrl })
    console.log(res)
  } catch (error) {
    await fs.unlink(tempDir)
  }
}
module.exports = avatars
