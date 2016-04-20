const Sequelize = require('sequelize');
const sequelize = new Sequelize('ankio', 'ankio_user', 'ankio_password', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('user', {
  userId: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: Sequelize.STRING,
});

const Deck = sequelize.define('deck', {
  deckId: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  deckName: Sequelize.STRING,
  created: { type: Sequelize.STRING, defaultValue: Date.now() },
  updated: { type: Sequelize.STRING, defaultValue: Date.now() },
});

const Card = sequelize.define('card', {
  cardId: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  question: Sequelize.STRING,
  answer: Sequelize.STRING,
  numCorrect: { type: Sequelize.INTEGER, defaultValue: 0 },
  displayCount: { type: Sequelize.INTEGER, defaultValue: 0 },
  created: { type: Sequelize.STRING, defaultValue: Date.now() },
  updated: { type: Sequelize.STRING, defaultValue: Date.now() },
});

Deck.belongsTo(User);
Card.belongsTo(Deck);

sequelize.sync();

module.exports = { User, Deck, Card };
