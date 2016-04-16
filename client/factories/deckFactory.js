angular
  .module('DeckFactory', ['ui.router'])
  .factory('DeckFactory', DeckFactory);

function DeckFactory($http) {
  return {
    deck: {id: 1, username: "Bob", title: "Cat Facts", description: "Fun things about felines"},
//    deck: {},
    setDeck: function(deckId) {
      // this.deck = $http.post('/decks', { });
    },
    loadDeck: function() {
      return this.deck;
    },
    saveDeck: function(deck) {
      console.log(deck);
    }
  }
}
