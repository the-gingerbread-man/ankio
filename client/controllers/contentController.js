angular
  .module('MDB.ContentController', ['ui.router'])
  .controller('ContentController', ContentController);

function ContentController($scope, UserFactory) {
  $scope.landingPage = UserFactory.login;
  $scope.testing = 'daniel';
  $scope.$on('handleBroadcast', function(event, status) {
    $scope.landingPage = status;
  });
}
