angular
  .module('MainController', ['ui.router'])
  .controller('MainController', MainController);


function MainController($scope, $state, DeckFactory, UserFactory) {

  $scope.landingPage = UserFactory.login;
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
  
  $scope.$on('handleBroadcast', function(event, status) {
    $scope.landingPage = status;
  });

  //  Initialize view
  $scope.getAllDecks();

}
