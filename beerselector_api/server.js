var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');
require('./server/config/mongoose.js');

mongoose.connect('mongodb://localhost/beer_db');

app.use(express.static(__dirname + '/public/dist/public'));


app.set('trust proxy', 1)
app.use(session({
secret:'activeSession',
resave:false,
saveUninitialized:true,
cookie: {maxAge:60000}
}))

app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var routes = require('./server/config/routes.js');
routes(app)

app.listen(8000, function() {
console.log('listening on port 8000');
})