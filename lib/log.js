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
  maxLength: 512          // Truncate output if longer
}

const inspect = yves.inspector({...options})

module.exports = function log(...args) {
  inspect(args[0])
}
