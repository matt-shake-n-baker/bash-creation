const request = require('request');


module.exports = function (url){
  url=url.split('');
  request(url, function(error, response, body) {
    // console.log(url);
    if (error) {
      console.error(error)
    } else {
      process.stdout.write(response)
      process.stdout.write('\n'+ body)
      process.stdout.write('\nprompt > ')
    }
  })

}
