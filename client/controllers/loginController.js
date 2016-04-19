angular
  .module('MDB.LoginController', ['ui.router'])
  .controller('LoginController', LoginController);

function LoginController($scope, $state, UserFactory) {
  $scope.name = '';
  $scope.errorText = '';
  $scope.signupText = '';
  $scope.loginText = 'Logging in - Click here to create an account.';
  $scope.loggedIn = false;
  $scope.logoutButton = false;

  // Find the User in the Database through user.js routes
  // If $scope.loginText is true - User will log in
  // Otherwise a new user will be created
  $scope.login = function() {
    //console.log('log in',$scope.username,$scope.password);
      UserFactory.fetch($scope.username, $scope.password).success(function(user) {
        if (user === 'error') {
          $scope.errorText = 'User/Password is incorrect.';
        } else {
          $scope.name = 'Hello ' + user;
          $scope.loggedIn = $scope.logoutButton = true;
          // UserFactory.broadcast('createdDecks');
          console.log($scope.loggedIn,$scope.logoutButton );
          $state.go('userpage');
        }
      });
  };

  $scope.signup = function(){
    UserFactory.create($scope.username, $scope.password);
    $scope.name = 'Hello ' + $scope.username;
    $scope.loggedIn = $scope.logoutButton = true;
    $state.go('userpage');
  };


  // Logs out user by using broadcast to change the view
  $scope.logout = function() {
    $scope.loggedIn = $scope.logoutButton = false;
    // UserFactory.broadcast('landing');
    $scope.name = '';
    $scope.password = '';
    $state.go('login');
  };

  // Toggled Login / Create text on nav.html
  $scope.textHandler = function() {
    if ($scope.signupText) {
      $scope.signupText = '';
      $scope.loginText = 'Logging in - Click here to create an account.';
    } else {
      $scope.signupText = 'Creating an Account - Click here to login in.';
      $scope.loginText = '';
    }
  };
}
