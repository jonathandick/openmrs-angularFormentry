/*
jshint -W098, -W003, -W068, -W004, -W033, -W030, -W117, -W069, -W106
*/
/*jscs:disable disallowMixedSpacesAndTabs, requireDotNotation, requirePaddingNewLinesBeforeLineComments, requireTrailingComma*/
'use strict';

/**
 * @ngdoc overview
 * @name angularFormentryApp
 * @description
 * # angularFormentryApp
 *
 * Main module of the application.
 */
angular
  .module('angularFormentry', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngResource',
    'openmrs-ngresource.models',
    'openmrs-ngresource.restServices',
    'openmrs.angularFormentry',
    'ui.ace',
    'app.formDesigner'
  ])
  .config(function($stateProvider) {
  });
