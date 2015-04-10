/*jslint node: true*/
/*global describe, it, before, beforeEach, after, afterEach, inject, expect*/
'use strict';
describe("service", function () {
  beforeEach(function () {
    module("app");
    module(function ($provide) {
      $provide.constant("VERSION", "TEST_VER"); // mock the constant
    });
  });
  return describe("$version", function () {
    return it("should return current version", inject(function ($version) {
      return expect($version).toEqual("TEST_VER");
    }));
  });
});
