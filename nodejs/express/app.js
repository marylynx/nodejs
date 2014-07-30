var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send("<p><hr>This would be some HTML</p>");
});

app.get('/api', function(request, response) {
    response.send({name:"Raymond",age:40});
});
 
app.listen(3000);