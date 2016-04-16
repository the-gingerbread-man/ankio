const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const user = require('./routes/user');

app.use(express.static(path.join(__dirname, './../client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use('/users', user);

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + './../client'));
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port 3000");
});
