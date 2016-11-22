'use strict';

angular.module('makatonicsApp').config(function($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });

});
