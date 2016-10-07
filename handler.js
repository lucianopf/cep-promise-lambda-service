'use strict'

const cep = require('cep-promise')

module.exports.get = (event, context, cb) => {
  if (!event.query.number) {
    return context.fail(JSON.stringify(new Error('No number parameter provided.')))
  }
  return cep(event.query.number)
    .then(res => context.succeed(JSON.stringify(res)))
    .catch(err => context.fail(JSON.stringify(err)))
}
