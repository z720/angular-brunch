/*jslint node: true, browser: true*/
/*global describe, it, before, beforeEach, after, afterEach, inject, expect, element, browser, by, $*/

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function () {
  'use strict';
  beforeEach(function () {
    return browser.get('/');
  });

  it('should automatically redirect to /todo when location hash/fragment is empty', function () {
    return expect(browser.getLocationAbsUrl()).toMatch('/todo');
  });

  it('should navigate to /view when the View link in nav is clicked', function () {
    $('.nav a[href="#/view"]').click();
    return expect(browser.getLocationAbsUrl()).toMatch('/view');
  });

  describe('todo', function () {
    it('should list 2 items', function () {
      return expect(element.all(by.repeater('task in todo.tasks')).count()).toEqual(2);
    });

    it('should display checked items with a line-through', function () {
      return expect($('[ng-view] ul li input:checked + span').getCssValue('text-decoration')).toEqual('line-through');
    });

    it('should sync done status with checkbox state', function () {
      $('[ng-view] ul li input:not(:checked)').click();
      expect($('[ng-view] ul li:first-child span').getAttribute('class')).toEqual('donetrue');
      $('[ng-view] ul li:first-child input:checked').click();
      return expect($('[ng-view] ul li:first-child span').getAttribute('class')).toEqual('donefalse');
    });

    it('should remove checked items when the archive link is clicked', function () {
      $('[ng-view] a[ng-click="todo.archive()"]').click();
      return expect(element.all(by.repeater('task in todo.tasks')).count()).toEqual(1);
    });

    return it('should add a newly submitted item to the end of the list and empty the text input', function () {
      var newItemLabel = 'test newly added item',
        input = element(by.model('todo.taskText'));
      input.sendKeys(newItemLabel);
      $('[ng-view] button[type="submit"]').click();
      expect(element.all(by.repeater('task in todo.tasks')).count()).toEqual(3);
      expect($('[ng-view] ul li:last-child span').getText()).toEqual(newItemLabel);
      return expect(input.getAttribute('value')).toEqual('');
    });
  });

  describe('view', function () {
    beforeEach(function () {
      return browser.get('#/view');
    });
    return it('should render view when user navigates to /view', function () {
      return expect($('[ng-view] p:first-child').getText()).toMatch(/partial for view/);
    });
  });
});
