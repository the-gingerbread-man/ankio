const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const connection = new Sequelize('potato', 'potato123', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

// card table
var Cards = connection.define('cards', {
	  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
	  deckId: Sequelize.INTEGER,
	  question: Sequelize.STRING,
	  answer: Sequelize.STRING,
	  numCorrect: Sequelize.INTEGER,
	  displayCount: Sequelize.INTEGER
});

// insert cards of a deck into postgres
router.post('/create', function(req, res) {
	  connection.sync().then(function() {
		  Cards.create({
			  deckId: req.body.deckId,
			  question: req.body.question,
			  answer: res.body.answer,
			  numCorrect: 0,
			  displayCount: 0
	  }).catch(function(error) {
		    console.error(error);
		});
	});

});

// Alter successRate & displayCount as the user views the card
// and when they get the correct answer
router.post('/update', function(req, res) {
	  Cards.update({
		  numCorrect: req.body.numCorrect,
		  displayCount: req.body.displayCount
	}, {
		  where: {
			  id: cardId
		}
	});
});

// user can edit their question and answer, changes will reflect in postgres
router.post(function(req, res) {
	  Cards.update({
		  question: req.body.question,
		  answer: req.body.answer
	}, {
		  where: {
			  id: req.body.id
		}
	});
});

// read all cards in 1 deck
router.post('/read', function(req, res) {
	// console.log(req.body);
	  Cards.findAll({
		  where: {
			  deckId: req.body.deckId
		}
	}).then(function(decksObj) {
		// res.send()
	}).catch(function(error) {
		  console.error(error);
	});
});

// delete card (row in cards)
router.post(function(req, res) {
		  Cards.destroy({
			  where: {
				  id: req.body.id
			}
		});
});


module.exports = router;
