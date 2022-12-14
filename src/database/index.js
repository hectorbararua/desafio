const Sequelize = require('sequelize')

const DB_NAME = 'cadastro_clinica'
const DB_USER = 'root'
const DB_PASS = '12156073hh'
const DB_CONFIG = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
}

let db = {}

try {
  const DB_NAME = 'cadastro_clinica'
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) {
  console.error('Erro ao tentar se conectar')
}

async function hasConection() {
  try {
    await db.authenticate()
    console.log('Banco de dados conectado!')
  } catch (error) {
    console.error('erro ao tentar se conectar ao banco de dados!')
  }
}

Object.assign(db, {
  hasConection
})

module.exports = db
