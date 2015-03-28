/*jslint browser: true*/
/*global angular */
// Declare app level module which depends on filters, and services
angular.module('app', ['ngSanitize', 'ngResource', 'ngRoute', 'oc.modal'])
  .constant('VERSION', '{!version!}')
  .config([ '$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/todo', {
      templateUrl: 'partials/todo.html',
      controller: 'TodoCtrl',
      controllerAs: 'todo'
    }).when('/view', {
      templateUrl: 'partials/view.html',
      controller: 'ViewCtrl',
      controllerAs: 'view'
    }).otherwise({ redirectTo: '/todo'});
  }]);
