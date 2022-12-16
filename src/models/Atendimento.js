const db = require('../database')
const { DataTypes, BelongsTo } = require('sequelize')
const { Paciente, Psicologo } = require('./')

const Atendimento = db.define(
  'Atendimento',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    psicologoId: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologo,
        key: 'id'
      }
    },
    pacienteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Paciente,
        key: 'id'
      }
    },
    dataAtendimento: {
      type: DataTypes.DATE
    },
    observacao: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: 'atendimento',
    timestamps: false,
    underscored: true
  }
)

module.exports = Atendimento
