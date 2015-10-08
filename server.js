var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Still active.');
});

app.get('/nickname', function(request, response){
    response.send('outstanding-narwhal');
});

app.listen(process.env.PORT || 4000);