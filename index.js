var deepCheck = require('deep-check')

module.exports = function(data, schema, message){
  message = message || 'required settings are missing: '
  var missing = deepCheck(data, schema) || []
  if(missing.length<=0) return
  throw new Error(message + missing.join(', '))
}