const { Paciente } = require('../models')

const controllerPaciente = {
  listarPacienteAll: async (req, res) => {
    const listarPacienteAll = await Paciente.findAll()

    res.json(listarPacienteAll)
  },
  listarPaciente: async (req, res) => {
    try {
      const { id } = req.params

      const { nome, email, idade } = await Paciente.findOne({
        where: {
          id
        }
      })
      res.json({ id, nome, email, idade })
    } catch (error) {
      res.json({
        message: 'Id não encontrado'
      })
    }
  },

  cadastrarPaciente: async (req, res) => {
    try {
      const { nome, email, idade } = req.body

      if (!email || !nome)
        throw new Error('E-mail inválido, verifique e tente novamente')
      const novoPaciente = await Paciente.create({
        nome,
        email,
        idade
      })

      res.status(200).json(novoPaciente)
    } catch (error) {
      res.status(401).json({
        message: error.message
      })
    }
  },

  atualizarPaciente: async (req, res) => {
    const { id } = req.params
    const { nome, email, idade } = req.body
    const pacienteAtualizado = await Paciente.update(
      { nome, email, idade },
      {
        where: {
          id
        }
      }
    )

    res.json('Paciente atualizado')
  },
  deletarPaciente: async (req, res) => {
    try {
      const { id } = req.params

      const isDeleted = await Paciente.destroy({
        where: {
          id
        }
      })

      if (!isDeleted) throw new Error('Id não encontrado')

      res.json('Paciente Deletado')
    } catch (error) {
      res.status(404)
      res.json({
        message: error.message
      })
    }
  }
}

module.exports = controllerPaciente
