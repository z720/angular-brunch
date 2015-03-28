/*jslint node: true*/
/*global describe, it, before, beforeEach, after, afterEach, inject, expect*/
'use strict';
describe("service", function () {
  beforeEach(module("app"));
  return describe("$version", function () {
    return it("should return current version", inject(function ($version) {
      return expect($version).toEqual("0.8.0-dev");
    }));
  });
});
