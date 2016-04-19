var myApp = angular
  .module('myApp', [
    'ui.router',
    'MDB.LoginController',
    'MDB.UserFactory',
    'MDB.ContentController',
    'TestController',
    'MainController',
    'CreateController',
    'DeckFactory'
  ]);

// myApp.config(function($stateProvider, $urlRouterProvider) {
//
//   // If the user goes beyond the '/' route it will redirect them to '/'
//   $urlRouterProvider.otherwise('/');
//
//   $stateProvider
//     .state('index', {
//       url: "/",
//       views: {
//         'nav': {
//           templateUrl: "partials/nav.html",
//           controller: 'LoginController'
//         },
//         'landing': {
//           templateUrl: "partials/landing.html",
//           controller: 'ContentController'
//         },
//         'home': {
//           templateUrl: "partials/main.html",
//           controller: 'MainController'
//         },
//         'test': {
//           templateUrl: "partials/test.html",
//           controller: 'TestController'
//         },
//         'create': {
//           templateUrl: "partials/create.html",
//           controller: 'CreateController'
//         }
//       }
//     });
// });

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
    });
});
