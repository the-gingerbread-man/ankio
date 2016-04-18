angular
  .module('MainController', ['ui.router'])
  .controller('MainController', MainController);


function MainController($scope, $state, DeckFactory) {

  //  Retrieves an array of the user's decks from the factory
  $scope.getAllDecks = function() {
    DeckFactory.getAllDecks()
      .then(function(result) {
        $scope.decks = result;
    });
  }

  //  Select new deck to load into factory, then redirect to test page
  $scope.setDeck = function(index) {
    DeckFactory.setDeck(index)
      .then(function() {
        $state.go('test');
    });
  }

  //  Initialize view
  $scope.getAllDecks();
}
