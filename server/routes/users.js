const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const connection = new Sequelize('potato', 'potato123', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

// user table
var User = connection.define('user', {
	username: {type: Sequelize.STRING, unique: true, allowNull: false},
	password: {type: Sequelize.STRING, allowNull: false}
});

// create a new user and store into postgres
router.post(function(req,res) {
	connection.sync().then(function() {
		User.create({
			username: req.body.username,
			password: req.body.password,
		}).catch(function(error) {
		// console.error(error);
		});
	});
});

// Check to see if login is valid
router.post(function(req,res) {
		User.findAll({
			where: {
				username: req.body.username, // username that user inputs on login
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
});
//isLoginValid("SOMEUSERNAME2");

module.exports = router;
