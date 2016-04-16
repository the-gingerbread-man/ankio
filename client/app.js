var myApp = angular
  .module('myApp', [
    'ui.router',
    'TestController',
    'MainController',
    'CreateController'
  ]);


myApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./partials/main.html",
      controller: "MainController"
    });

  $stateProvider
    .state('test', {
      url: "/test",
      templateUrl: "./partials/test.html",
      controller: "TestController"
    });

  $stateProvider
    .state('create', {
      url: "/create",
      templateUrl: "./partials/create.html",
      controller: "CreateController"
    });

});
