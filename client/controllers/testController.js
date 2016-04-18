angular
  .module('TestController', ['ui.router'])
  .controller('TestController', TestController);

function TestController($scope, DeckFactory, UserFactory) {

  //  The text to display on the card
  $scope.showText;

  //  The index of the current displayed card in deck
  $scope.index = 0;

  //  True when question is to be shown; false for answer
  $scope.showQ = true;
  $scope.currentView = '';

  $scope.$on('handleBroadcast', function (event, status) {
    $scope.currentView = status;
  });

  $scope.previousPage = function () {
    $scope.currentView = '';
    UserFactory.broadcast('createdDecks');
  };

  //  Retrieve array of cards and deck name from factory and display first question
  // $scope.getCards = function() {
  //   $scope.cards = DeckFactory.loadDeck();
  //   $scope.deckName = DeckFactory.getDeckname();
  //   $scope.numCards = $scope.cards.length;
  //   // $scope.showText = $scope.cards[$scope.index].question;
  //   $scope.showCard();
  // }

  //  Display the appropriate question or answer
  //  'cardSide' is the text at the top of the card
  $scope.showCard = function () {
    if ($scope.showQ) {
      $scope.cardSide = 'Question';
      $scope.showText = $scope.cards[$scope.index].question;
    } else {
      $scope.cardSide = 'Answer';
      $scope.showText = $scope.cards[$scope.index].answer;
    }
  };

  //  Advance the card when user selects 'next', 'correct', or 'incorrect'
  $scope.nextCard = function (correct) {

    //  TODO: Set up functionality of scoring progress
    if (correct === 'Y') $scope.cards[$scope.index].numCorrect++;
    if (correct === 'Y' || correct === 'N') $scope.cards[$scope.index].displayCount++;

    //  TODO: Randomize next card
    if ($scope.index + 1 >= $scope.numCards) $scope.index = 0;
    else ++$scope.index;

    //  When next card is shown, text should be the question
    $scope.showQ = true;
    $scope.showCard();
  };

  //  Change index to previous card. This currently assumes cards are in order
  $scope.prevCard = function () {
    if ($scope.index - 1 < 0) $scope.index = $scope.numCards - 1;
    else --$scope.index;
    $scope.showQ = true;
    $scope.showCard();
  };

  //  Alternate between question and answer
  $scope.flipCard = function () {
    $scope.showQ = !$scope.showQ;
    $scope.showCard();
  };

  //  TODO: This function has not been implemented. It should update the database with
  //  the user's performance details
  $scope.logCards = function () {
    $scope.cards.forEach(function (card) {
      DeckFactory.updateScore(card.id, card.numCorrect, card.displayCount);
    });
  };

  //  Initialize the create page by calling the getCards function
  // $scope.getCards();
}
