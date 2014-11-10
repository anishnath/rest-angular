'use strict';

/* Controllers */

var app = angular.module('ngdemoApp.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
});


app.controller('WelcomeCtrl', ['$scope', 'TODOFactory', function ($scope, TODOFactory) {
}]);

  
app.controller('TODODetailCtrl', ['$scope', '$routeParams', 'TODOFactory', '$location',
  function ($scope, $routeParams, TODOFactory, $location) {

    /* callback for ng-click 'updateUser': */
    $scope.updateTodo = function () {
      TODOFactory.update($scope.todo);
      $location.path('/todo-list');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/todo-list');
    };

    $scope.todo = TODOFactory.show({id: $routeParams.id});
  }]);
  
  app.controller('TODOCreationCtrl', ['$scope', 'TODOUPDATEFactory', '$location',
  function ($scope, TODOUPDATEFactory, $location) {
	  $scope.duedate=new Date(2013, 9, 22);
    /* callback for ng-click 'createNewUser': */
    $scope.createNewTodo = function () {
    	var x = $scope.duedate
    	//yyyy-MM-dd"
    	var dduedate=x.getFullYear()+ "-" + x.getMonth()+ "-"+ x.getDate()
    	console.log(dduedate)
    	TODOUPDATEFactory.create({label:$scope.label,duedate:dduedate});
        $location.path('/todo-list');
    }
  }]);



app.controller('TODOListCtrl', ['$scope', 'TODOSFactory', 'TODOFactory', '$location',
  function ($scope, TODOSFactory, TODOFactory, $location) {

    /* callback for ng-click 'editUser': */
    $scope.editTask = function (id) {
      $location.path('/todo-detail/' + id);
    };

    /* callback for ng-click 'deleteTODO': */
    $scope.deleteTask = function (id) {
      TODOFactory.delete({ id: id });
      $scope.todos = TODOSFactory.query();
    };

    /* callback for ng-click 'createUser': */
    $scope.createNewTodo = function () {
    	
      $location.path('/todo-creation');
    };

    $scope.todos = TODOSFactory.query();
  }]);