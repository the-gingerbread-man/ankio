const express = require('express');
const router = express.Router();
const Deck = require('./../db/dbController.js').Deck;
const Card = require('./../db/dbController.js').Card;

router
	.post('/create', (req, res) => {
		Deck
		.create({ userId: req.body.userId, deckName: req.body.deckName })
		.then(res.send)
		.catch(console.error);
	})

	.post('/destroy', function(req, res) {
	  Deck.destroy({ where: { deckId: req.body.deckId }});
	  Card
	  	.findAll({
		  	where: { deckId: req.body.deckId }
		  })
	  	.then(cards => {
		  	cards.forEach(card => {
			  	Card.destroy({ where: { id: card.id }});
				});
			});
	})
	
	.get('/getAll', (req, res) => {
		Deck
			.findAll({ where: { userUserId: req.body.userId }})
			.then(res.send)
			.catch(console.error);
});

module.exports = router;
