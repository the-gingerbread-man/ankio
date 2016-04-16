angular
  .module('MainController', ['ui.router'])
  .controller('MainController', MainController);


function MainController($scope, DeckFactory, UserFactory) {
  $scope.landingPage = UserFactory.login;
  // $scope.decks = DeckFactory.getAllDecks();

  // $scope.setDeck = function(deckId) {
  //   DeckFactory.setDeck(deckId);
  // }
  $scope.$on('handleBroadcast', function(event, status) {
    $scope.landingPage = status;
  });
}
