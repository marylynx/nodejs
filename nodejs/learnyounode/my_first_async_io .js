var fs = require('fs')

fs.readFile(process.argv[2], function (err, contents) {
  var n = contents.toString().split('\n').length - 1
  console.log(n)
})