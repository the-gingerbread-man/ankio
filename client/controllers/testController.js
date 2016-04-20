angular
  .module('TestController', ['ui.router'])
  .controller('TestController', TestController);

function TestController($scope, $stateParams, DeckFactory, UserFactory) {

  //  The index of the current displayed card in deck
  $scope.index = 0;

  $scope.currentDeck;
  DeckFactory.getAllDecks().then((data) => {
    $scope.decks = data.data;
    $scope.currentDeck = $scope.decks[$stateParams.id];
  });
  $scope.cards;
  DeckFactory.setDeck($stateParams.id).then((data) => {
    $scope.cards = data.data;
    console.log($scope.cards);
    $scope.currentQuestion = $scope.cards[$scope.index];
    //  The text to display on the card
    $scope.showText = $scope.currentQuestion.question;
    $scope.showCard();
  });

  //  True when question is to be shown; false for answer
  $scope.showQ = true;
  $scope.currentView = '';

  //  Display the appropriate question or answer
  //  'cardSide' is the text at the top of the card
  $scope.showCard = function() {
    $scope.currentQuestion = $scope.cards[$scope.index];
    if ($scope.showQ) {
      $scope.cardSide = 'Question';
      $scope.showText = $scope.currentQuestion.question;
    } else {
      $scope.cardSide = 'Answer';
      $scope.showText = $scope.currentQuestion.answer;
      $scope.showQ = false;
    }
  };

  //  Change index to previous card. This currently assumes cards are in order
  $scope.prevCard = function() {
    if ($scope.index - 1 < 0) $scope.index = $scope.cards.length - 1;
    else --$scope.index;
    $scope.showQ = true;
    $scope.showCard();
  };

  //  Advance the card when user selects 'next', 'correct', or 'incorrect'
  $scope.nextCard = function(correct) {

    //  TODO: Set up functionality of scoring progress
    // if (correct === 'Y') $scope.cards[$scope.index].numCorrect++;
    // if (correct === 'Y' || correct === 'N') $scope.cards[$scope.index].displayCount++;

    //  TODO: Randomize next card
    if ($scope.index + 1 > $scope.cards.length - 1) {
      console.log('never')
      $scope.index = 0;
      $scope.showCard();
    }
    else {
      $scope.index++;
      console.log($scope.index);
      $scope.currentQuestion = $scope.cards[$scope.index];
      console.log($scope.currentQuestion);
      //  When next card is shown, text should be the question
      $scope.showQ = true;
      $scope.showCard();
    }
  };
  //$scope.currentQuestion = $scope.cards[$scope.index];
  //console.log(DeckFactory);


  // $scope.$on('handleBroadcast', function(event, status) {
  //   $scope.currentView = status;
  // });

  $scope.previousPage = function() {
    $scope.currentView = '';
    // UserFactory.broadcast('createdDecks');
  };
  //  Retrieve array of cards and deck name from factory and display first question
  // $scope.getCards = function() {
  //   $scope.cards = DeckFactory.loadDeck();
  //   $scope.deckName = DeckFactory.getDeckname();
  //   $scope.numCards = $scope.cards.length;
  //   // $scope.showText = $scope.cards[$scope.index].question;
  //   $scope.showCard();
  // }

  //  Alternate between question and answer
  $scope.flipCard = function() {
    $scope.showQ = !$scope.showQ;
    $scope.showCard();
  };

  //  TODO: This function has not been implemented. It should update the database with
  //  the user's performance details
  $scope.logCards = function() {
    $scope.cards.forEach(function(card) {
      DeckFactory.updateScore(card.id, card.numCorrect, card.displayCount);
    });
  };

  //  Initialize the create page by calling the getCards function
  // $scope.getCards();
}
