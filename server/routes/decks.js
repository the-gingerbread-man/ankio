const express = require('express');
const router = express.Router();
const Deck = require('./../db/dbController.js').Deck;

// create a new deck, insert into postgres
router.post('/create', function(req, res) {
	  // sequelize.sync().then(function() {
		  Deck.create({
			  username: req.body.username,
			  deckname: req.body.deckname
		}).then(function(newDeck) {
			  res.send(newDeck);
		}).catch(function(error) {
			   console.error(error);
		});
	// });
});

// delete a deck
router.post(function(req, res) {
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
					  id: card.id // ??
				}
			});
		});
	});
});

// read all Deck of 1 user
router.get('/getAll', function(req, res) {
    //console.log('yo');
    console.log('router:',req.body);
	Deck.findAll({
    where: {
      username: 'carlos'
    }
  }).then(function(DeckObj) {
		//console.log(DeckObj)
		res.send(DeckObj)
	}).catch(function(error) {
			console.error(error);
	})
});

// INPUT: deleteDeck(32);
module.exports = router;
