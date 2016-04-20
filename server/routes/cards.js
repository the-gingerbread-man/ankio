const express = require('express');
const router = express.Router();
const Card = require('./../db/dbController.js').Card;

// insert cards of a deck into postgres
router
  .post('/create', function(req, res) {
		  Card.create({
			  deckId: req.body.deckId,
			  question: req.body.question,
			  answer: req.body.answer,
			  numCorrect: 0,
        numIncorrect: 0,
			  displayCount: 0
	     })
    .then(res.send)
  })

  .get('/read', function(req, res) {
     Card
       .findAll({ where: { deckId: req.query.deckId }})
       .then(res.send);
   })

  .post('/update', function(req, res) {
	  Card
      .update({
		    numCorrect: req.body.numCorrect,
        numIncorrect: req.body.numIncorrect,
		    displayCount: req.body.displayCount
      }, { where: { cardId: req.body.cardId }
      })
      .then(res.send);
  })

  .post('/delete', function(req, res) {
		  Card
        .destroy({ where: { cardId: req.body.cardId }})
        .then(res.send);
  });


module.exports = router;
