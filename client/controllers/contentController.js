angular
  .module('MDB.ContentController', ['ui.router'])
  .controller('ContentController', ContentController);

function ContentController($scope, UserFactory) {
  $scope.landingPage = 'landing';
  $scope.$on('handleBroadcast', function(event, status) {
    $scope.landingPage = status;
  });
}
