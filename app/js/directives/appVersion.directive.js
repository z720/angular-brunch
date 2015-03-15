/*jslint browser: true*/
/*global angular */
angular.module('app').directive('appVersion', [ 'VERSION', function (VERSION) {
  'use strict';
  function link($scope) {
    // you can do things here if you want!
    $scope.version = VERSION;
  }
  return {
    restrict: 'A',
    template: 'v{{version}}',
    link: link
  };
}]);
