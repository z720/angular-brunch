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
  describe("TodoCtrl", function () {
    var view;
    beforeEach(function () {
      inject(function ($controller) {
        view = $controller("TodoCtrl");
      });
    });
    it("should expose tasks", function () {
      return expect(view.tasks.length).toEqual(2);
    });
    it("should allow to add task", function () {
      view.addTask('Test');
      return expect(view.tasks.length).toEqual(3);
    });
    it("should allow to count remaining tasks", function () {
      expect(view.remaining()).toEqual(1);
      view.addTask('Test');
      expect(view.remaining()).toEqual(2);
      view.tasks[2].done = true;
      expect(view.remaining()).toEqual(1);
    });
    it("should allow to archive tasks", function () {
      view.archive();
      expect(view.remaining()).toEqual(1);
      return expect(view.tasks.length).toEqual(1);
    });
  });
  describe('AppCtrl', function () {
    var view, $location;
    beforeEach(function () {
      inject(function ($controller, $injector) {
        view = $controller('AppCtrl');
        $location = $injector.get('$location');
      });
    });
    describe('isCurrent', function () {
      it('should return true if current location match', function () {
        return expect(view.isCurrent('')).toEqual(true);
      });
      it('should return false if current location doesn\'t match', function () {
        return expect(view.isCurrent('hereIsNotCurrent')).toEqual(false);
      });

    });

  });
});
