const { Atendimento } = require('../models')

const controllerAtendimento = {
  listarAtendimentoAll: async (req, res) => {
    const listarAtendimentoAll = await Atendimento.findAll()
    res.status(200).json(listarAtendimentoAll)
  },

  listarAtendimento: async (req, res) => {
    try {
      const { id } = req.params
      const { psicologoId, pacienteId, dataAtendimento, observacao } =
        await Atendimento.findOne({
          where: {
            id
          }
        })

      res.json({ id, psicologoId, pacienteId, dataAtendimento, observacao })
    } catch (error) {
      res.json({
        message: 'Id não encontrado'
      })
    }
  },

  cadastrarAtendimento: async (req, res) => {
    try {
      console.log(req.user)
      const { psicologoId, pacienteId, dataAtendimento, observacao } = req.body
      const cadastrarAtendimento = await Atendimento.create({
        psicologoId,
        pacienteId,
        dataAtendimento,
        observacao
      })

      res.status(201).json(cadastrarAtendimento)
    } catch (error) {
      res.status(401).json({
        message: error.message
      })
    }
  }
}
module.exports = controllerAtendimento
