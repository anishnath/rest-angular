'use strict';

angular.module('ngdemoApp', [
  'ngdemoApp.services',
  'ngdemoApp.controllers'
  ])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider.when('/welcome', {templateUrl: 'views/welcome.html', controller: 'WelcomeCtrl'});
  $routeProvider.when('/todo-detail/:id', {templateUrl: 'views/todo-detail.html', controller: 'TODODetailCtrl'});
  $routeProvider.when('/todo-creation', {templateUrl: 'views/todo-creation.html', controller: 'TODOCreationCtrl'});
  $routeProvider.when('/todo-list', {templateUrl: 'views/todo-list.html', controller: 'TODOListCtrl'});
  $routeProvider.otherwise({redirectTo: '/welcome'});

  
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
