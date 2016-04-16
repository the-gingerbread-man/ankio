const express = require('express');
const router = express.Router();

// deck tables
var Decks = connection.define('decks', {
	username: Sequelize.STRING,
	deckName: Sequelize.STRING,
})

// create a new deck, insert into postgres 
router.post(function(req,res) {
	function createDeck(userName, deckName) {
		connection.sync().then(function() {
			Decks.create({
				username: userName,
				deckName: deckName
			}).catch(function(error) {
				 console.error(error);
			})
		});
	}
});

// INPUT NEW DECK HERE: createDeck(someUser, aDeckName)

// delete a deck
router.post(function(req,res) {
	function deleteDeck(deckId) {  
		Decks.destroy({
			where: {
				id: deckId
			}
		});

		cards.findAll({
			where: {
				deckId: deckId
			}
		}).then(function(cards) {
			cards.forEach(function(card) {
				Cards.destroy({
					where: {
						id: card.id
					}
				})
			})
		})
	}
});

// INPUT: deleteDeck(32); 

module.exports = router;