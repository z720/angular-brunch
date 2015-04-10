/*jslint node:true*/

var shared = require('./karma.conf.js');
module.exports = function (karma) {
  'use strict';
  shared(karma);
  karma.set({
    // override
    // Use headless on a server
    browsers: ['PhantomJS'],
    // Don't watch, perform only 1 pass
    singleRun: true,
    // report as xml
    junitReporter: {
      outputFile: 'test-results.xml'
    },
    // Code coverage
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
      ]
    },
    // Run test with not joined files for detailled coverage
    files: [
   // Application Code
      'public/js/vendor.js',
      'app/app.module.js',
      'app/js/**/*.js',

      'bower_components/angular-mocks/angular-mocks.js',

      'test/unit/**/*.spec.js'
    ],
    // List of files for coverage
    preprocessors: {
      'app/**/*.js': 'coverage'
    }
  });
};
