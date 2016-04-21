const express = require('express');
const router = express.Router();
const Card = require('./../db/dbController.js').Card;

router
  .post('/create', (req, res) => {
		  Card
        .create({
          deckDeckId: req.body.deckId,
          question: req.body.question,
          answer: req.body.answer,
          numCorrect: 0,
          numIncorrect: 0,
          displayCount: 0
	     })
      .then(dbResponse => { res.send(dbResponse); })
      .catch(console.error);
  })

  .get('/read', (req, res) => {
     Card
       .findAll({ where: { deckDeckId: req.query.deckId }}) // Should this be req.query or req.body ??
       .then(dbResponse => { res.send(dbResponse); })
       .catch(console.error);
   })

  .post('/update', (req, res) => {
	  Card
      .update({
		    numCorrect: req.body.numCorrect,
        numIncorrect: req.body.numIncorrect,
		    displayCount: req.body.displayCount
        }, { where: { cardId: req.body.cardId }
      })
      .then(dbResponse => { res.send(dbResponse); })
      .catch(console.error);
  })

  .post('/delete', (req, res) => {
		  Card
        .destroy({ where: { cardId: req.body.cardId }})
        .then(dbResponse => { res.send(dbResponse); })
        .catch(console.error);
});

module.exports = router;
