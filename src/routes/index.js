const express = require('express')
const controllerPsicologo = require('../controllers/controllerPsicologo')
const controllerPaciente = require('../controllers/controllerPaciente')

const routes = express.Router()

//                           ROUTES PSICOLOGO

routes.get('/psicologo/listar', controllerPsicologo.listarPsicologoAll)
routes.get('/psicologo/listar/:id', controllerPsicologo.listarPsicologo)
routes.post('/psicologo/cadastrar', controllerPsicologo.cadastrarPsicologo)
routes.put('/psicologo/:id/atualizar', controllerPsicologo.atualizarPsicologo)
routes.delete('/psicologo/:id/deletar', controllerPsicologo.deletarPsicologo)

//                           ROUTES PACIENTE

routes.get('/paciente/listar', controllerPaciente.listarPacienteAll)
routes.get('/paciente/listar/:id', controllerPaciente.listarPaciente)
routes.post('/paciente/cadastrar', controllerPaciente.cadastrarPaciente)
routes.put('/paciente/:id/atualizar', controllerPaciente.atualizarPaciente)
routes.delete('/paciente/:id/deletar', controllerPaciente.deletarPaciente)

module.exports = routes
