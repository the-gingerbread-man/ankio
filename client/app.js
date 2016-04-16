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
        },
        'home': {
          templateUrl: "partials/main.html",
          controller: 'MainController'
        }
      }
    })
})

//       templateUrl: "./partials/main.html",
//       controller: "MainController"
//     });

//   $stateProvider
//     .state('test', {
//       url: "/test",
//       templateUrl: "./partials/test.html",
//       controller: "TestController"
//     });

//   $stateProvider
//     .state('create', {
//       url: "/create",
//       templateUrl: "./partials/create.html",
//       controller: "CreateController"
//     });

// });
