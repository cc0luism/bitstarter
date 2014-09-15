var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
fs = require('fs')
// fs.readFileSync, Buffer.toString,
var txtindex = fs.readFileSync( "index.html")
var str = new Buffer( txtindex)
response.send( str.toString())

  // response.send('Hello World 3!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
