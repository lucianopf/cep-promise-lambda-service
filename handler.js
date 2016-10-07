'use strict'

const cep = require('cep-promise')

module.exports.get = (event, context, cb) => {
  if (!event.query.number) {
    return context.fail(new Error('No number parameter provided.'))
  }
  return cep(event.query.number)
    .then(res => context.succeed(res))
    .catch(err => context.fail(JSON.stringify(err)))
}
