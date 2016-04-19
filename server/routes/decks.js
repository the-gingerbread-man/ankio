const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const connection = new Sequelize('template1', 'coffeeapp', 'capassword', {
  host: 'localhost',
  dialect: 'postgres',
});

// deck tables
var Decks = connection.define('decks', {
	  username: Sequelize.STRING,
	  deckname: Sequelize.STRING,
});

// create a new deck, insert into postgres
router.post('/create', function(req, res) {
	  connection.sync().then(function() {
		  Decks.create({
			  username: req.body.username,
			  deckname: req.body.deckname
		}).then(function(newDeck) {
			  res.send(newDeck);
		}).catch(function(error) {
			   console.error(error);
		});
	});
});

// delete a deck
router.post(function(req, res) {
	  Decks.destroy({
		  where: {
			  id: req.body.id
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

// read all decks of 1 user
router.get('/getAll', function(req, res) {
    //console.log('yo');
    console.log('router:',req.body);
	Decks.findAll({
    where: {
      username: 'carlos'
    }
  }).then(function(decksObj) {
		//console.log(decksObj)
		res.send(decksObj)
	}).catch(function(error) {
				 console.error(error);
	})
});

// INPUT: deleteDeck(32);
module.exports = router;
