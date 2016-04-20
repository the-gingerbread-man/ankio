angular
  .module('MDB.UserFactory', ['ui.router'])
  .factory('UserFactory', UserFactory);

function UserFactory($http, $rootScope) {
  var msgObj = {login: false};
  msgObj.username = '';

  msgObj.fetch = function(username, password) {
    msgObj.username = username;
    var user = {username: username, password: password};
    return $http.post('/users', user);
  };

  msgObj.create = function(username, password) {
    var user = {username: username, password: password};
    return $http.post('/users/create', user);
  };

  // msgObj.broadcast = function(status) {
  //   $rootScope.$broadcast('handleBroadcast', status);
  // };

  return msgObj;
}
