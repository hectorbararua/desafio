const express = require('express')
const controllerPsicologo = require('../controllers/controllerPsicologo')
const authController = require('../controllers/authController')

const controllerPaciente = require('../controllers/controllerPaciente')
const psicologoCreateValidation = require('../validations/Psicologos/create')
const authLoginValidation = require('../validations/auth/login')
const authAtendimentoValidation = require('../validations/Atendimento/create')
const controllerAtendimento = require('../controllers/controllerAtendimento')
const auth = require('../Middlewares/auth')

const routes = express.Router()

//                           ROUTES PSICOLOGO

routes.get('/psicologo/listar', controllerPsicologo.listarPsicologoAll)
routes.get('/psicologo/listar/:id', controllerPsicologo.listarPsicologo)
routes.post(
  '/psicologo/cadastrar',
  psicologoCreateValidation,
  controllerPsicologo.cadastrarPsicologo
)
routes.put('/psicologo/:id/atualizar', controllerPsicologo.atualizarPsicologo)
routes.delete('/psicologo/:id/deletar', controllerPsicologo.deletarPsicologo)
routes.post('/login', authLoginValidation, authController.login)

//                           ROUTES PACIENTE

routes.get('/paciente/listar', controllerPaciente.listarPacienteAll)
routes.get('/paciente/listar/:id', controllerPaciente.listarPaciente)
routes.post('/paciente/cadastrar', controllerPaciente.cadastrarPaciente)
routes.put('/paciente/:id/atualizar', controllerPaciente.atualizarPaciente)
routes.delete('/paciente/:id/deletar', controllerPaciente.deletarPaciente)

//                         ROUTES ATENDIMENTO

routes.get('/atendimento/listar', controllerAtendimento.listarAtendimentoAll)
routes.get('/atendimento/listar/:id', controllerAtendimento.listarAtendimento)
routes.post(
  '/atendimento/cadastrar',
  authAtendimentoValidation,
  auth,
  controllerAtendimento.cadastrarAtendimento
)

module.exports = routes
