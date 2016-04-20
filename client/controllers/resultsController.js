angular
  .module('ResultsController', ['ui.router'])
  .controller('ResultsController', ResultsController);

function ResultsController($scope, DeckFactory, UserFactory) {

  $scope.chartData = DeckFactory.results;
  $scope.currentDeckId = DeckFactory.deckId;  
  $scope.message = "Keep up the good work!";
  $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
            forceY: ([0,100]),
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Questions',
                    axisLabelDistance: 10,
                    // tickFormat: function(d){ return d3.format(',f')(d)}
                    // rotateLabels : -90
                },
                yAxis: {
                    axisLabel: 'Percentage Correct',
                    axisLabelDistance: -10,
                    tickFormat: function(d){ return d3.format(',f')(d + '%')},
                    valueFormat: function(d){ return d3.format('%')(d);}
                }
            }
        };
  $scope.data = [
      {
        values: $scope.chartData
      }
  ];

}
