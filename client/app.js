var myApp = angular
  .module('myApp', [
    'ui.router',
    'MDB.LoginController',
    'MDB.UserFactory',
    'MDB.ContentController'
  ]);

myApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: "/",
      views: {
        'nav': {
          templateUrl: "partials/nav.html",
          controller: 'LoginController'
        },
        'landing': {
          templateUrl: "partials/landing.html",
          controller: 'ContentController'
        }
      }
    })
})

