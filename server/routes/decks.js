const express = require('express');
const router = express.Router();
const Deck = require('./../db/dbController.js').Deck;
const Card = require('./../db/dbController.js').Card;

router
	.post('/create', (req, res) => {
		Deck
			.create({ userUserId: req.body.userId, deckName: req.body.deckName })
			.then(newDeck => { res.send(newDeck.dataValues); })
			.catch(console.error);
	})

	.get('/getAll', (req, res) => {
		Deck
			.findAll({ where: { userUserId: req.query.userId }})	// Should this be req.body or req.query ??
			.then(dbResponse => { res.send(dbResponse); })
			.catch(console.error);
	})

	.post('/destroy', (req, res) => {
	  Deck
	  	.destroy({ where: { deckId: req.body.deckId }})
	  	.catch(console.error);
	  
	  Card
	  	.destroy({ where: { deck : req.body.deckId }})
			.catch(console.error);
});

module.exports = router;
