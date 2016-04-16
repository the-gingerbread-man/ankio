angular
  .module('MainController', ['ui.router'])
  .controller('MainController', MainController);


function MainController($scope, DeckService) {

  $scope.setDeck = function(deckId) {
    $scope.fake = deckId;
//    DeckService.setDeck($scope.deck);
  }
}

