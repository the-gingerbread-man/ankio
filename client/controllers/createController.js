angular
  .module('CreateController', ['ui.router'])
  .controller('CreateController', CreateController);

function CreateController($scope, DeckFactory) {
  $scope.username = 'Bob';
  $scope.deck = 'Default';

  $scope.createDeck = function() {
    console.log("function called in controller", $scope.username, $scope.deckname);
    $scope.deck = DeckFactory.createDeck($scope.username, $scope.deckname);
  }

  $scope.addCard = function() {
    console.log("add card called in controller");
    DeckFactory.addCard($scope.username, $scope.deckname);
  }

}
