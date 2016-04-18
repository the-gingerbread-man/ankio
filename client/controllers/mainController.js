angular
  .module('MainController', ['ui.router'])
  .controller('MainController', MainController);


function MainController($scope, DeckFactory, UserFactory) {
  $scope.currentView = 'createdDecks';

  // $scope.decks = DeckFactory.getAllDecks();
  $scope.$on('handleBroadcast', function(event, status) {
    $scope.currentView = status;
  });

  $scope.setDeck = function(deckId) {
    // DeckFactory.setDeck(deckId);
    $scope.currentView = '';
    UserFactory.broadcast('currentDeck');
  }

  $scope.createDeck = function() {
    // DeckFactory.setDeck(deckId);
    $scope.currentView = '';
    UserFactory.broadcast('createDeck');
  }

}
