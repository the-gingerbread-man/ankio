const express = require('express');
const router = express.Router();
const Card = require('./../db/dbController.js').Card;

// insert Card of a deck into postgres
router.post('/create', function(req, res) {
	  // sequelize.sync().then(function() {
		  Card.create({
			  deckId: req.body.deckId,
			  question: req.body.question,
			  answer: req.body.answer,
			  numCorrect: 0,
			  displayCount: 0,
	  }).catch(function(error) {
		    console.error(error);
		});
	// });

});

// Alter successRate & displayCount as the user views the card
// and when they get the correct answer
router.post('/update', function(req, res) {
	  Card.update({
		  numCorrect: req.body.numCorrect,
		  displayCount: req.body.displayCount
	}, {
		  where: {
			  cardId: req.body.cardId
		}
	});
});

// user can edit their question and answer, changes will reflect in postgres
router.post(function(req, res) {
	  Card.update({
		  question: req.body.question,
		  answer: req.body.answer
	}, {
		  where: {
			  cardId: req.body.cardId
		}
	});
});

// read all Card in 1 deck
router.post('/read', function(req, res) {
	// console.log(req.body);
	  Card.findAll({
		  where: {
			  deckId: req.body.deckId
		}
	}).then(function(decksObj) {
		// res.send()
	}).catch(function(error) {
		  console.error(error);
	});
});

// delete card (row in Card)
router.post(function(req, res) {
		  Card.destroy({
			  where: {
				  cardI: req.body.cardId
			}
		});
});


module.exports = router;