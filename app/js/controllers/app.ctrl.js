/*jslint browser: true*/
/*global angular */
angular.module('app').controller('AppCtrl', ['$location', function AppCtrl($location) {
  'use strict';
  var vm = this;
  // this is the controller for the whole page
  vm.isCurrent = function (path) {
    return $location.path() === path;
  };
}]);
