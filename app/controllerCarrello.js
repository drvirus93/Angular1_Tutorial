angular.module('gemStore')
.controller('ControllerCarrello',function($rootScope, $scope){
	console.log("toPurchase Length: "+$rootScope.toPurchase.length);

	$scope.newGem = $rootScope.toPurchase;

//	console.log($rootScope.toPurchase);
	//alert($scope.newGem[0].name);
});
