const { Psicologo } = require('../models')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret')
const bcrypt = require('bcryptjs')

const AuthController = {
  async login(req, res) {
    const { email, senha } = req.body

    const psicologo = await Psicologo.findOne({
      where: {
        email
      }
    })
    if (!psicologo) {
      return res.status(400).json('E-mail não cadastrado!')
    }

    if (!bcrypt.compareSync(senha, psicologo.senha)) {
      return res
        .status(401)
        .json('E-mail ou senha inválido, verifique e tente novamente')
    }

    const token = jwt.sign(
      {
        id: Psicologo.id,
        email: Psicologo.email,
        nome: Psicologo.nome
      },
      secret.key
    )

    return res.json(token)
  }
}

module.exports = AuthController
