import log = require('./lib/log')

const a = 'Pollo'

function polloBorracho<T>(ab: T): T {
  return ab
}

log(polloBorracho(a))
