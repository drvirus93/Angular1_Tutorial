angular.module('valveStore')
.controller('ControllerConfermaAcquisto',function($rootScope,$scope){


  $scope.confirmOrder = function() {

  console.log($rootScope.user.length);
  console.log($scope.user.length);
  }

});
