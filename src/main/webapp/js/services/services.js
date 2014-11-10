'use strict';

var services = angular.module('ngdemoApp.services', ['ngResource']);

var baseUrl = 'http://localhost';

services.factory('DummyFactory', function ($resource) {
    return $resource(baseUrl + '/ngdemo/web/dummy', {}, {
        query: { method: 'GET', params: {} }
    })
});


services.factory('TODOUPDATEFactory', function ($resource) {
    return $resource(baseUrl + '/rest-todolist/todo/create', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('TODOSFactory', function ($resource) {
    return $resource(baseUrl + '/rest-todolist/todo/list', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('TODOFactory', function ($resource) {
    return $resource(baseUrl + '/ngdemo/web/users/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});