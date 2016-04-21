const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./../db/dbController.js').User;

router
  .post('/', (req, res) => {
    User
    .findOne({ where: { username: req.body.username } })
    .then(item => {
      if(item) {
        // user with inputted username does exist, check password
        bcrypt.compare(req.body.password, item.dataValues.password, (err, pwSuccess) => {
          if (err) { console.error('bcrypt error: ', err); }

          if (pwSuccess) res.status(200).send(item.userId);
          else res.status(404).send('Password Invalid');
        });
      } else {
        // no user with inputted username exists in the db
        res.status(404).send(`No user with uername ${req.body.username} exists`);
      }
    })
    .catch(console.error);
  })

  .post('/create', (req, res) => {
    bcrypt.hash(req.body.password, 10, ((err, hashedPassword) => {
      User
      .create({ username: req.body.username, password: hashedPassword })
      .then(userRecord => { res.status(200).send(userRecord.userId); })
      .catch(error => { res.status(404).send('Fail: User not created.'); });
    }));
});

module.exports = router;
