const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/')));

app.get('/', function(req,res){
	res.sendFile('./server');
})
	
const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port 3000");
});