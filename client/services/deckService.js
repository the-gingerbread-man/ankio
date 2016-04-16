angular
  .module('DeckService', ['ui.router'])
  .service('DeckService', DeckService);

function DeckService() {
  return {
    deck: {id: 1, username: "Bob", title: "Cat Facts", description: "Fun things about felines"},
//    deck: {},
    setDeck: function(deck) {
      this.deck = deck;
    },
    loadDeck: function() {
      return this.deck;
    },
    saveDeck: function(deck) {
      console.log(deck); 
    }
  }
}
