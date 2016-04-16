angular
  .module('MainController', ['ui.router'])
  .controller('MainController', MainController);


function MainController($scope, DeckFactory) {

  $scope.decks = DeckFactory.getAllDecks();

  $scope.setDeck = function(deckId) {
    DeckFactory.setDeck(deckId);
  }
}
