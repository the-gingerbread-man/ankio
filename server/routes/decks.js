const express = require('express');
const router = express.Router();
const Deck = require('./../db/dbController.js').Deck;

// create a new deck, insert into postgres
router.post('/create', function(req, res) {
		  Deck.create({
			  userId: req.body.userId,
			 	deckName: req.body.deckName
		}).then(function(newDeck) {
			  res.send(newDeck);
		}).catch(function(error) {
			   console.error(error);
		});
});

// delete a deck
router.post('/destroy', function(req, res) {
	  Deck.destroy({
		  where: {
			  deckId: req.body.deckId
			}
	});

	  Cards.findAll({
		  where: {
			  deckId: req.body.deckId
		}
	}).then(function(cards) {
		  cards.forEach(function(card) {
			  Cards.destroy({
				  where: {
					  id: card.id
				}
			});
		});
	});
});

// read all Deck of 1 user
router.get('/getAll', function(req, res) {
	Deck.findAll({
    where: {
      userUserId: req.body.userId
    }
  }).then(function(DeckObj) {
		res.send(DeckObj)
	}).catch(function(error) {
			console.error(error);
	})
});

module.exports = router;
