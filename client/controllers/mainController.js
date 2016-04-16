angular
  .module('MainController', ['ui.router'])
  .controller('MainController', MainController);


function MainController($scope, DeckFactory) {

  $scope.setDeck = function(deckId) {
    $scope.fake = deckId;
//    DeckFactory.setDeck($scope.deck);
  }
}
