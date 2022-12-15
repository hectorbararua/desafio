const Psicologo = require('../models/Psicologo')
const bcrypt = require('bcryptjs')

const controllerPsicologo = {
  listarPsicologoAll: async (req, res) => {
    const listarPsicologoAll = await Psicologo.findAll()

    res.json(listarPsicologoAll)
  },
  listarPsicologo: async (req, res) => {
    try {
      const { id } = req.params

      const { nome, email, apresentacao } = await Psicologo.findOne({
        where: {
          id
        }
      })
      res.json({ id, nome, email, apresentacao })
    } catch (error) {
      res.json({
        message: 'Id não encontrado'
      })
    }
  },

  cadastrarPsicologo: async (req, res) => {
    try {
      const { nome, email, senha, apresentacao } = req.body

      if (!email || !senha)
        throw new Error('E-mail ou senha inválido, verifique e tente novamente')

      const newSenha = bcrypt.hashSync(senha, 10)

      const novoPsicologo = await Psicologo.create({
        nome,
        email,
        senha: newSenha,
        apresentacao
      })

      res.status(200).json(novoPsicologo)
    } catch (error) {
      res.status(401).json({
        message: error.message
      })
    }
  },

  atualizarPsicologo: async (req, res) => {
    const { id } = req.params
    const { nome, email, senha, apresentacao } = req.body
    const psicologoAtualizado = await Psicologo.update(
      { nome, email, senha, apresentacao },
      {
        where: {
          id
        }
      }
    )

    res.json('Psicologo Atualizado')
  },
  deletarPsicologo: async (req, res) => {
    try {
      const { id } = req.params

      const isDeleted = await Psicologo.destroy({
        where: {
          id
        }
      })

      if (!isDeleted) throw new Error('Id não encontrado')

      res.json('Psicologo Deletado')
    } catch (error) {
      res.status(404)
      res.json({
        message: error.message
      })
    }
  }
}

module.exports = controllerPsicologo
