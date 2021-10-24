const fs = require('fs/promises')
const path = require('path')
const { User } = require('../../models')

const avatarDir = path.join(__dirname, '../../', 'public/avatars')

const avatars = async (req, res) => {
  const { originalname, path: tempName } = req.file
  try {
    const [extention] = originalname.split('.').reverse()
    const newFileName = `user_${req.user._id}.${extention}`
    const resultStorage = path.join(avatarDir, newFileName)
    await fs.rename(tempName, resultStorage)
    const avatar = path.join('/avatars', newFileName)
    const { avatarUrl } = await User.findByIdAndUpdate(
      req.user._id,
      { avatarUrl: avatar },
      { new: true }
    )
    res.json({
      avatarUrl
    })
  } catch (error) {
    await fs.unlink(tempName)
  }
}

module.exports = avatars
