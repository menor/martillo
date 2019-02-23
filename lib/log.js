const yves = require('yves')

const options = {
  styles: {               // Styles applied to stdout
    all:     'cyan',      // Overall style applied to everything
    label:   'underline', // Inspection labels, like 'array' in `array: [1, 2, 3]`
    other:   'inverted',  // Objects with no literal representation, like functions
    key:     'bold',      // The keys in object literals, like 'a' in `{a: 1}`
    special: 'grey',      // null, undefined...
    string:  'green',
    number:  'magenta',
    bool:    'blue',      // true false
    regexp:  'green',     // /\d+/
  },

  pretty: true,           // Indent object literals
  hideFunctions: false,   // Don't output functions at all
  maxLength: 2048          // Truncate output if longer
}

const output = yves.inspector({...options})

module.exports = function log(...args) {
  if (!args.length) {
    output(undefined)
    return undefined
  }

  else if (args.length > 1) {
    output(args[1].inspect(), args[0])
    return args[1]
  }

  output(args[0].inspect())
  return args[0]
}
