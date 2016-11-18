angular.module('valveStore',['ngRoute']).
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/valveStore', {
          templateUrl: 'home.html',
          controller: 'ControllerHome'
        }).
        when('/single', {
          templateUrl: 'single.html',
          controller: 'ControllerSingle'
        }).
        otherwise('/valveStore');
    }
  ]);
