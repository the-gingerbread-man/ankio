const path = require('path');
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import Routes
const users = require('./routes/user');
const decks = require('./routes/decks');
const cards = require('./routes/cards');

app.use(express.static(path.join(__dirname, './../client')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use('/users', users);
app.use('/decks', decks);
app.use('/cards', cards);

app.get('/', (req, res) => {
	res.render('./../client/index.html');
});

app.listen(PORT);

export default app;