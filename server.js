// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// adding yhe handlebar
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exHandlebars = require('express-handlebars');
app.engine('handlebars', exHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burger_controller.js');
app.use('/', router);

//Server Port Adding
var port = process.env.PORT || 3030;
console.log("Running At PORT:" + port);
app.listen(port);