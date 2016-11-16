angular.module('gemStore',['ngRoute']).
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/gems', {
          templateUrl: 'home.html',
          controller: 'ControllerHome'
        }).
        when('/carrello', {
          templateUrl: 'carrello.html',
          controller: 'ControllerCarrello'
        }).
        when('/confermaAcquisto' ,{
          templateUrl: 'confermaAcquisto.html',
          controller: 'ControllerConfermaAcquisto'
        }).
        otherwise('/gems');
    }
  ]);
