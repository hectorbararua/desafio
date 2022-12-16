const jwt = require('jsonwebtoken')
const secret = require('../configs/secret')

module.exports = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) throw new Error()

    jwt.verify(token, secret.key, function (err, decoded) {
      req.user = decoded
    })

    next()
  } catch (error) {
    res.status(401).json({
      message: 'Usuário não autorizado.'
    })
  }
}
