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
router.post(function(req,res) {
	function createCards(deckId, aQuestion, aAnswer) {
		connection.sync().then(function() {
			Cards.create({
				deckId: deckId,
				question: aQuestion,
				answer: aAnswer,
				numCorrect: 0,
				displayCount: 0
		  }).catch(function(error) {
		 	  console.error(error);
			});
		});
  }
});

// INPUT GLORIOUS CARD CREATION: createCards(32, "What is the difference between a living person and a corpse?", "Time");

// Alter successRate & displayCount as the user views the card
// and when they get the correct answer
router.post(function(req,res) {
	function alterNumAndDisplayCounts(cardId, newNumCorrect, newDisplayCount) {
		Cards.update({
			numCorrect: newNumCorrect,
			displayCount: newDisplayCount
		}, {
			where: {
				id: cardId
			}
		});
	}
});

// INPUT: alterNumAndDisplayCounts(1, 50, 100);

// user can edit their question and answer, changes will reflect in postgres
router.post(function(req,res) {
	function editRow(cardId, newQuestion, newAnswer) {
		Cards.update({
			question: newQuestion,
			answer: newAnswer
		}, {
			where: {
				id: cardId
			}
		});
	}
});
// INPUT CHANGES: editRow(7, "Derpdie derp", "Sherp sherp!");

// delete card (row in cards)
router.post(function(req,res) {
	function deleteCard(cardId) {
		Cards.destroy({
			where: {
				id: cardId
			}
		});
	}
});


module.exports = router;
