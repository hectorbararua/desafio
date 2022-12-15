const express = require('express')
const routes = require('./routes')
const requestLog = require('./Middlewares/requestLog')
const handleError = require('./Middlewares/handleError')

const db = require('./database')

const app = express()
db.hasConection()

app.use(express.json())

app.use(requestLog)

app.use(routes)

app.use(handleError)

app.listen(3001, () => console.log('Servidor rodando na porta 3001'))
