var express = require('express');
var app = express();

app.get('/', home);

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/dist'));

function home(req, res) {
    res.sendFile(__dirname + "/index.html");
}

var server = app.listen(3000, 'localhost', function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})