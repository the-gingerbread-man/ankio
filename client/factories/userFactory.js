angular
  .module('MDB.UserFactory', ['ui.router'])
  .factory('UserFactory', UserFactory);

function UserFactory($http) {
  var msgObj = {};

  msgObj.fetch = function(username, password) {
    var user = {username: username, password: password};
    return $http.post('/users', user);
  }

  return msgObj;
}
