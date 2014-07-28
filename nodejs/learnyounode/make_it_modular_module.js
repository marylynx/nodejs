var fs = require('fs');
var path = require('path');

module.exports = function (dir, str, func) {

  fs.readdir(dir, function (err, files) {
    if (err)
      return func(err);

    files = files.filter(function (file) {
      return path.extname(file) === '.' + str;
    })

    func(null, files);
  })
}
