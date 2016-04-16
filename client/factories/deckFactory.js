angular
  .module('DeckFactory', ['ui.router'])
  .factory('DeckFactory', DeckFactory);

function DeckFactory($http) {
  return {
//     deck: {id: 1, username: "Bob", title: "Cat Facts", description: "Fun things about felines"},
// //    deck: {},

//     createDeck: function(username, deckname) {
//       $http.post('/newDeck', {username, deckname})
//         .then(function(res));
//     },

//     getAllDecks: function(user) {
//       console.log("getAllDecks in DeckFactory");
//       $http.post('/decks', {username: "Bob"});
//         // .then(function(res) {
//         //   this.userDecks = res.body;
//         // });
//     },

//     setDeck: function(deckId) {
//       // this.deck = $http.post('/decks', { });
//     },
    // loadDeck: function() {
    //   return this.deck;
    // },
    // saveDeck: function(deck) {
    //   console.log(deck);
    // }
  }
}
