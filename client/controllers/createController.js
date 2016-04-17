angular
  .module('CreateController', ['ui.router'])
  .controller('CreateController', CreateController);

function CreateController($scope, $q, DeckFactory) {
  $scope.username = 'Bob';
  var thePromise = $q.defer();
  $scope.deck = thePromise.promise;

  $scope.createDeck = function() {
    console.log("function called in controller", $scope.username, $scope.deckname);
    thePromise.resolve(DeckFactory.createDeck($scope.username, $scope.deckname));
  }

  $scope.addCard = function() {
    $scope.deck.then(function(data) {
      console.log("here is the data", data);
    }, function(error) {
      console.error("e", error);
    });
    console.log("adding card to deck:", $scope.deck);
    console.log("add card called in controller");
    DeckFactory.addCard($scope.username, $scope.deckname);
  }

}
