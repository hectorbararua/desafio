const db = require('../database')
const { DataTypes } = require('sequelize')

const Psicologo = db.define(
  'Psicologo',
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

    senha: {
      type: DataTypes.INTEGER
    },
    apresentacao: {
      type: DataTypes.STRING
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
    tableName: 'Psicologo'
  }
)

module.exports = Psicologo
