angular
  .module('DeckFactory', ['ui.router'])
  .factory('DeckFactory', DeckFactory);

function DeckFactory($http, $stateParams, UserFactory) {

  var factory = {};

  //  All decks belonging to the logged in user
  var userDecks = [];

  //  The current deck of cards selected for test

  //  The cards in the current deck
  var cardsInDeck = [];

  //  Create a new deck in database
  factory.createDeck = function(userId, deckname) {
    $http.post('/decks/create', {
      userId: userId,
      deckName: deckname
    }).then(function(res) {
      console.log(res);
      //factory.deck = res;
      // return res.data;
    });
  };

  //  Add a card to the current deck in the database
  factory.addCard = function(deckId, ques, ans) {
    console.log(deckId, ques, ans);
    $http.post('/cards/create', {
      deckId: deckId,
      question: ques,
      answer: ans
    })
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
    }).error(function(err) {
      //allDecks.reject('Error');
    });
    //return userDecks;
  };

  //  Retrieve all cards in the current deck and store in factory
  factory.setDeck = function(index) {
    return $http.get('/cards/read', {
      params: { id: index }
    }).success(function(data) {
        cardsInDeck = data;
      }).error(function(err) {
    });
  };
  factory.sessionResults = function(deck, id) {
    console.log('session results', deck);
    factory.deckId = id;
    factory.results = deck.map((question, i) => {
      return {
          "label" : question.question,
          "value" : (question.numCorrect === 0) ? 0.0 : Math.round((question.numCorrect / question.displayCount) * 100),
      };
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
