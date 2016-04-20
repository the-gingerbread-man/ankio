const express = require('express');
const router = express.Router();
const Deck = require('./../db/dbController.js').Deck;
const Card = require('./../db/dbController.js').Card;

router
	.post('/create', (req, res) => {
		Deck
		.create({ userUserId: req.body.userId, deckName: req.body.deckName })
		.then(newDeck => {
			console.log('New Deck Data Values: ', newDeck.dataValues);
			res.send(newDeck.dataValues);
		})
		.catch(console.error);
	})

	.post('/destroy', (req, res) => {
	  Deck
	  	.destroy({ where: { deckId: req.body.deckId }})
	  	.catch(console.error);
	  
	  Card
	  	.destroy({ where: { deck : req.body.deckId }})
			.catch(console.error);
	})
	
	.get('/getAll', (req, res) => {
		Deck
			.findAll({ where: { userUserId: req.body.userId }})
			.then(res.send)
			.catch(console.error);
});

module.exports = router;
