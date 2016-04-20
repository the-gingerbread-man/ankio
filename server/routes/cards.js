const express = require('express');
const router = express.Router();
const Card = require('./../db/dbController.js').Card;

router
	.post('/create', (req, res) => {
		  Card
		  	.create({
			  	deckId: req.body.deckId,
			  	question: req.body.question,
			  	answer: req.body.answer,
			  	numCorrect: 0,
			  	displayCount: 0,
	  		})
	  		.catch(function(error) {
		    	console.error(error);
				});
	})

	.post('/update', (req, res) => {
	  Card
	  	.update({ numCorrect: req.body.numCorrect, displayCount: req.body.displayCount },
	  					{ where: { cardId: req.body.cardId }
			});
	})

	.post( (req, res) => {
	  Card
	  	.update({ question: req.body.question, answer: req.body.answer },
	  					{ where: { cardId: req.body.cardId }
			});
	})

	.post('/read', function(req, res) {
	  Card
	  	.findAll({ where: { deckId: req.body.deckId }})
	  	.then(res.send)
	  	.catch(console.error);
	})

	.post(function(req, res) {
		  Card
		  	.destroy({ where: { cardI: req.body.cardId }});
	});


module.exports = router;