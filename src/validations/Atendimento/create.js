const { validate, Joi } = require('express-validation')

module.exports = validate({
  body: Joi.object({
    pacienteId: Joi.number().required(),
    dataAtendimento: Joi.date().required(),
    observacao: Joi.string().required()
  })
})
