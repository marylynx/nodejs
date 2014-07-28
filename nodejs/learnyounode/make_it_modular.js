var filter = require('./make_it_modular_module.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filter(dir, filterStr, function (err, files) {
  if (err)
    return console.error('There was an error:', err);

  files.forEach(function (file) {
    console.log(file);
  })
})