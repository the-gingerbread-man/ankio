const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require('sequelize');

app.use(express.static(path.join(__dirname, './../client/')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + './../client/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port 3000");
});

// 
app.post("/users", function(req,res){
	
})
//
var connection = new Sequelize('potato', 'potato123', '123', {
  host: 'localhost',
  dialect: 'postgres',
})

// username and pass table
var User = connection.define('user', {
	username: {type: Sequelize.STRING, unique: true, allowNull: false},
	password: {type: Sequelize.STRING, allowNull: false}
});

// deck tables
var Decks = connection.define('decks', {
		username: Sequelize.STRING,
		name: Sequelize.STRING,
		cards: Sequelize.ARRAY(Sequelize.JSON)
});  

// syncs Sequelize with database and creates a new table
connection.sync().then(function() {
	User.create({
		username: 'SOMEUSERNAME9',
		password: 'SOMEPASSWORD9',
	}).catch(function(error) {
		// console.error(error); 
	});
}); 

// For inputting data 
connection.sync().then(function() {
	Decks.create({
		username: 'something2',
		name: 'GORILLAS',
		cards: [{'Q': 'QUESTION1', 'A': 'ANSWER1'}, {'Q': 'QUESTION2', 'A': 'ANSWER2'}, {'Q': 'QUESTION3', 'A': 'ANSWER3'} ]
	}).catch(function(error) {
		// console.error(error);
	})
});

//OR ?
//User.createUser = function(data, res) {
//  console.log('reached database');
//  User.create(data).then(function(a, b) {
//    res.redirect('/main');
//  }).catch(function(error) {
//    res.json(error);
//  });
//}

// need a function that takes username and password and sends it over the connection.sync()
// Check to see if login is valid
function isLoginValid(aUserName) {
	User.findAll({
		where: {
			username: aUserName, // username that user inputs on login
		}
	}).then(function(table) {
	// if table.length(IF USERNAME DOESNT EXIST PLEASE SIGN UP)
	// if password is wrong (USER EXISTS IN TABLE BUT WRONG PASSWORD)
	if(table.length !== 0) {
		res.render("Please Sign Up");
	}else if(table[0].password !== aUserName) {
		res.render("Wrong Password. Please try again")
	}}).catch(function(error) {
	// if any errors occur above
	});
}

isLoginValid("SOMEUSERNAME2");
// deletes all data in table, use with caution:
//connection.sync({
//	force: true,
//	logging: console.log
//})

module.exports = User;