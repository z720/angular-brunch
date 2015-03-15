/*jslint node: true*/
/*global describe, it, before, beforeEach, after, afterEach, inject, expect*/
'use strict';
describe("controllers", function () {
  beforeEach(module("app"));
  describe("ViewCtrl", function () {
    return it("should make scope testable", inject(function ($controller) {
      var view = $controller("ViewCtrl");
      return expect(view.content).toEqual("This is the partial for view.");
    }));
  });
});
