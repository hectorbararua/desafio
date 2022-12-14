const db = require('../database')
const { DataTypes } = require('sequelize')

const Paciente = db.define(
  'Paciente',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nome: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    idade: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  },
  {
    tableName: 'Paciente'
  }
)

module.exports = Paciente
