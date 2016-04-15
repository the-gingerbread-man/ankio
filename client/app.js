var myApp = angular
  .module('myApp', [
    'ui.router',
    'MDB.LoginController',
    'MDB.UserFactory'
  ]);

myApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('nav', {
      url: "/",
      views: {
        'nav': {
          templateUrl: "partials/nav.html",
          controller: 'LoginController'
        },
        'landing': {
          templateUrl: "partials/landing.html"
        }
      }
    })
})

