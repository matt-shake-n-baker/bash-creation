const request = require('request');

module.exports = function (url){
  request(url, function(error, response, body) {
    if (error) {
      process.stdout.write(error)
    } else {
      process.stdout.write('\n'+ body)
      process.stdout.write('\nprompt > ')
    }
  })
}
