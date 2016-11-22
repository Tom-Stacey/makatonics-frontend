/* global $ */

'use strict';

/**
 * @ngdoc overview
 * @name makatonicsApp
 * @description
 * # makatonicsApp
 *
 * Main module of the application.
 */

(function() {
angular
  .module('makatonicsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope) {

    var lastCheck = 0;
    var CHECK_INTERVAL = 500; //ms interval for checking at bottom of page

    var check = function() {
      if(Date.now() - lastCheck > CHECK_INTERVAL) {
        lastCheck = Date.now();

        if($(window).scrollTop() >=
            $(document).height() - $(window).height() - 200) {
          $rootScope.$broadcast('SCROLL_TO_BOTTOM');
        }
      }
    };

    setTimeout(function() {
      check();
    }, 0);
    $(window).on('scroll', check);
    $(window).on('resize', check);
    
  });
})();
