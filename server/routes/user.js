var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
// var sequelize = new Sequelize('potato', 'potato123', '123', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// var User = sequelize.define('user', {
//   _id : {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   username: Sequelize.TEXT,
//   password: Sequelize.TEXT
// });

// sequelize.sync({ logging: console.log }).then((error, data) => {
//   console.log("error: ", error);
// });

router.post('/', function(req, res) {
  // if(req.body.username === '1' && req.body.password === '1') {
  // }
    res.send(req.body);

  // results.forEach(function(listing) {
  //   Listing.create(createListing(listing));
  // });

});

module.exports = router;
