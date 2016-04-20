angular
  .module('DeckFactory', ['ui.router'])
  .factory('DeckFactory', DeckFactory);

function DeckFactory($http, UserFactory) {

  var factory = {};

  //  All decks belonging to the logged in user
  var userDecks = [];

  //  The current deck of cards selected for test
  var deck = {};

  //  The cards in the current deck
  var cardsInDeck = [];

  //  Create a new deck in database
  factory.createDeck = function(username, deckname) {
    console.log('CreateDeck: ' ,username);
    $http.post('/decks/create', {
      username: username,
      deckname: deckname
    }).then(function(res) {
      deck = res.data;
      return res.data;
    });
  };

  //  Add a card to the current deck in the database
  factory.addCard = function(ques, ans) {
    $http.post('/cards/create', {
      deckId: deck.id,
      question: ques,
      answer: ans
    }).then(function(res) {
      return res.data;
    });
  };

  //  Retrieve all decks for the logged in user and store in factory
  //  FIXME: Username of "Bob" is currently hard-coded in for testing
  // factory.getAllDecks = function(user) {
  //   var allDecks = $q.defer();
  //   $http.post(
  //     '/decks', {username: user}
  //   ).success(function(data) {
  //     userDecks = data;
  //     allDecks.resolve(data);
  //   }).error(function(err) {
  //     allDecks.reject('Error');
  //   });
  //   return allDecks.promise;
  // };

  factory.getAllDecks = function(user) {
    console.log('in get all decks', UserFactory.username);
    var req = {
     method: 'GET',
     url: '/decks/getAll',
     headers: {
       'Content-Type': 'application/json'
     },
     data: {username: UserFactory.username}
    }
    return $http.get('/decks/getAll').success(function(data) {
      userDecks = data;
        console.log(data);
    }).error(function(err) {
      //allDecks.reject('Error');
    });
    //return userDecks;
  };

  //  Retrieve all cards in the current deck and store in factory
  factory.setDeck = function(index) {
    console.log('setdeck - param: ', index);
    //deck = userDecks[index];
    //var allCards = $q.defer();
    // return $http.get('/cards/read').success(function(data) {
    //     cardsInDeck = data;
    //   }).error(function(err) {
    // });
    return $http.get('/cards/read', {
      params: { id: index }
    }).success(function(data) {
        cardsInDeck = data;
      }).error(function(err) {
    });
  };

  //  Returns the name of the current deck
  factory.getDeckname = function() {
    return deck.deckname;
  };

  //  Returns the cards in the current deck
  factory.loadDeck = function() {
    return cardsInDeck;
  };

  return factory;
}
