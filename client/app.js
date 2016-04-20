var myApp = angular
  .module('myApp', [
    'ui.router',
    'MDB.LoginController',
    'MDB.UserFactory',
    'MDB.ContentController',
    'TestController',
    'MainController',
    'CreateController',
    'DeckFactory',
    'nvd3',
    'ResultsController',
    'ngCookies'
  ]);

myApp.config(function($stateProvider, $urlRouterProvider) {

  // If the user goes beyond the '/' route it will redirect them to '/'
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/partials/landing.html',
      controller: 'LoginController'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/partials/login.html',
      controller: 'LoginController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/signup.html',
      controller: 'LoginController'
    })
    .state('userpage', {
      url: '/user',
      templateUrl: '/partials/create.html',
      controller: 'CreateController'
    })
    .state('user-deck', {
      url: '/user/{id}',
      templateUrl: '/partials/test.html',
      controller: 'TestController'
    })
    .state('results', {
      url: '/end/{id}',
      templateUrl: '/partials/results.html',
      controller: 'ResultsController'
    });
});
