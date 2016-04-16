angular
  .module('TestController', ['ui.router'])
  .controller('TestController', TestController);


function TestController($scope, DeckFactory) {
  $scope.showText;
  $scope.index = 0;
  $scope.showQ = true;
  $scope.nextButton = "Next";

  $scope.getCards = function() {
    $scope.deck = DeckFactory.loadDeck();
    $scope.deckName = $scope.deck.title;
    //  DeckFactory is a placeholder for a model from Masha
    // DeckFactory.fetch().success(function(cards) {
      var cards = [{Q: "How are you?", A: "Very well, thank you"}, {Q: "How's the weather?", A: "Sunny"},
        {Q: "What's for dinner?", A: "Knowing you...pork"}, {Q: "Was that sarcastic?", A: "Of course not...*rolls eyes*"}];
    $scope.cards = cards;
    $scope.numCards = cards.length;
    $scope.showText = $scope.cards[$scope.index].Q;
    $scope.cardSide = "Question";
    // });
  }

  $scope.showCard = function() {
    if ($scope.showQ) {
      $scope.cardSide = "Question";
      $scope.showText = $scope.cards[$scope.index].Q;
    } else {
      $scope.cardSide = "Answer";
      $scope.showText = $scope.cards[$scope.index].A;
    }
  }

  $scope.nextCard = function(correct) {
    if (correct === "Y") $scope.cards[$scope.index].numCorrect++;

    if (correct === "Y" || correct === "N") $scope.cards[$scope.index].displayCount++;

    if ($scope.index + 1 >= $scope.numCards) $scope.index = 0;
    else ++$scope.index;

    $scope.showQ = true;
    $scope.showCard('Q');
  }

  $scope.prevCard = function() {
    if ($scope.index - 1 < 0) $scope.index = $scope.numCards - 1;
    else --$scope.index;
    $scope.showQ = true;
    $scope.showCard('Q');
  }

  $scope.flipCard = function() {
    $scope.showQ = !$scope.showQ;
    $scope.showCard();
  }

  $scope.logCards = function() {
    $scope.cards.forEach(function(card) {
      DeckFactory.updateScore(card.id, card.numCorrect, card.displayCount);
    });
  }

  $scope.getCards();

}
