angular
  .module('DeckFactory', ['ui.router'])
  .factory('DeckFactory', DeckFactory);

function DeckFactory($http) {
  return {
    deck: {id: 1, username: "Bob", title: "Cat Facts", description: "Fun things about felines"},

    // createDeck: function(username, deckname) {
    //   $http.post('/decks/create', {
    //     username: username,
    //     deckname: deckname
    //   }).then(function(res) {
    //     console.log("response in factory", res);
    //     return res.data;
    //   });
    // },

    // addCard: function(dId, ques, ans) {
    //   $http.post('/cards/create', {
    //     deckId: dId,
    //     question: ques,
    //     answer: ans
    //   }).then(function(res) {
    //     console.log("response in factory", res);
    //     return res.data;
    //   });
    // },

    // getAllDecks: function(user) {
    //   console.log("getAllDecks in DeckFactory");
    //   $http.post('/decks', {username: "Bob"});
    //     .then(function(res) {
    //       this.userDecks = res.body;
    //     });
    // },

    // setDeck: function(deckId) {
    //   // this.deck = $http.post('/decks', { });
    // },
    loadDeck: function() {
      return this.deck;
    },
    // saveDeck: function(deck) {
    //   console.log(deck);
    // }
  }
}
