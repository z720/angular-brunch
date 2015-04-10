/*jslint browser: true*/
/*global angular */
angular.module('app').controller('TodoCtrl', function TodoCtrl() {
  'use strict';
  var todo = this, // this == $scope because we use the controllerAs definition
    addTask = function () {
      todo.tasks.push({
        text: todo.taskText,
        done: false
      });
      todo.taskText = '';
    },

    remaining = function () {
      var count;
      count = 0;
      angular.forEach(todo.tasks, function (task) {
        count += (task.done ? 0 : 1);
      });
      return count;
    },

    archive = function () {
      var oldTasks;
      oldTasks = todo.tasks;
      todo.tasks = [];
      return angular.forEach(oldTasks, function (task) {
        if (!task.done) {
          return todo.tasks.push(task);
        }
      });
    };

  todo.tasks = [{
    text: 'learn angular',
    done: true
  }, {
    text: 'build an angular app',
    done: false
  }];

  todo.addTask = addTask;
  todo.remaining = remaining;
  todo.archive = archive;

});
