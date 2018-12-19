var express = require("express");
var mysql = require("mysql");
var path = require("path");
var exphbs  = require('express-handlebars');
const PORT = process.env.PORT || 3000;
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
var routes = require('./controllers/burgers_controller'); //View Router
app.use('/', routes);

 
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});