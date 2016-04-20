const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./../db/dbController.js').User;

// Finds existing user in database after bcrypt hash
router.post('/', function(req, res) {
  User.findOne( { where: {username: req.body.username} }).then(function(item) {
    if (item) {
      var hashedPassword = bcrypt.hashSync(req.body.password, 10);
      if (bcrypt.compareSync(req.body.password, item.dataValues.password)) {
        res.send(req.body.username);
      } else {
        console.log('error');
        res.send('error');
      }
    }
    else {
      console.log('error');
    }
  });
});

// Creates new user in database after bcrypt hash
router.post('/create', function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  // sequelize.sync().then(function() {
    User.create({
      username: req.body.username,
      password: hashedPassword,
    }).catch(function(error) {
      console.error(error);
    });
  // });
});

module.exports = router;
