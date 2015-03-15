/*jslint browser: true*/
/*global angular */
angular.module('app').factory('$version', function version(VERSION) {
  'use strict';
  return VERSION;
});
