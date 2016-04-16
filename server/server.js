const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require('sequelize');
const users = require('./routes/users');
const decks = require('./routes/decks');
const cards = require('./routes/cards');
const connection = new Sequelize('potato', 'potato123', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

app.use('/users', users);
app.use('/decks', decks);
app.use('/cards', cards);

app.use(express.static(path.join(__dirname, './../client/')));

// render index page
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + './../client/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port 3000");
});


/*
	Deletes all data in table, use with caution or just use drop table TABLENAMEHERE in postgres:
	connection.sync({
		force: true,
		logging: console.log
	})
*/


/* 	This is for the algorithim:
	+ Keep track of right and wrong and add wrongs to a reviewArr
		+ Every time the next button is clicked increment to currentCard++
			+ if correct++
			+ if wrong++
*/
