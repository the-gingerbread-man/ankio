angular
  .module('MDB.LoginController', ['ui.router'])
  .controller('LoginController', LoginController);


function LoginController($scope, $timeout, UserFactory) {
  $scope.name = 'apple'
  $scope.login = function() {
    UserFactory.fetch($scope.username, $scope.password).success(function(user) {
      $scope.name = user.username;
    });
  };
  $scope.change = function() {
    console.log($scope.name)
    $scope.name = 'changed';
    console.log($scope.name)
  }
}
