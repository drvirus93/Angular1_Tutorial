angular.module('valveStore',['ngRoute']).
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/foo', {
          templateUrl: 'home.html',
          controller: 'ControllerHome'
        }).
        otherwise('/foo');
    }
  ]);
