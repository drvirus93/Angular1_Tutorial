angular.module('valveStore')
.controller('ControllerHome',function($rootScope, $scope){
	$rootScope.toPurchase = [];

$scope.toPurchase = [];

	$scope.user = [
	{
		productName: '',
		name: '',
		surname: '',
		cardNumber: '',
	},
	];
    $scope.confirmPurchase = function() {
		//console.log($rootScope.toPurchase);
	 }

	 $rootScope.user = $scope.user;

	$scope.buyGemAction = function(gem) {
		alert('You can buy this gem' + " " + gem.name + " at $ " + gem.price);

		var selectedGem = gem;
		var i=0;
		var ins=0;

		while(i<=$rootScope.toPurchase.length){
			if($rootScope.toPurchase.length === 0){
				$rootScope.toPurchase[i]=selectedGem;
				ins=i;
				i++;
			}
			 else if($rootScope.toPurchase[i] === selectedGem){
				alert('WARNING: You have alredy purchased this gem');
				i++;
				break;
			}
			else if(++i>$rootScope.toPurchase.length){
				if(selectedGem === $rootScope.toPurchase[ins]){
					break;
				}
				else{
					$rootScope.toPurchase[i-1] = selectedGem;
					ins=$rootScope.toPurchase.length;
					break;
				}
			}
		}
	 }
});
