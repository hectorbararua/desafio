const Atendimento = require('../models/Atendimento')
const Paciente = require('../models/Paciente')
const Psicologo = require('../models/Psicologo')

Atendimento.hasOne(Paciente, {
  as: 'paciente_id',
  foreignKey: 'id'
})

Atendimento.belongsTo(Psicologo, {
  as: 'psicologo_id',
  foreignKey: 'id'
})

module.exports = {
  Atendimento,
  Paciente,
  Psicologo
}
