const log = require('./lib/log')

const a = {
  a: 1 + 2,
  b: {
    c: 2,
    d: 2,
    e: 'string',
  },
}

function polloBorracho(a) {
  return a
}

log(polloBorracho(a))

