angular.module('valveStore')
.controller('ControllerHome',function($rootScope, $scope){
	$rootScope.toPurchase = [];

    $scope.products = [
	  {
		name: 'Performance',
		price: 2.95,
		description: 'In venti anni di storia abbiamo realizzato prodotti per soddisfare le richieste dei nostri clienti in tutto il mondo. A distanza di tempo le richieste sono cambiate, e per questo abbiamo dato una nuova veste ai nostri prodotti più famosi e prestigiosi, proponendo versioni riviste e aggiornate. Il nuovo amplificatore integrato Performance aumenta la potenza, rimanendo fedele al look vincente dell’originale, considerato un’icona di rara eleganza e piacevolezza.',
		canPurcase: true,
		soldOut: false,
		specification: {},
		reviews: {},
		img : '/images/grid4.jpg',

		}
		
	];

	$scope.user = [
	{
		productName: '',
		name: '',
		surname: '',
		cardNumber: '',
	}
	];
    $scope.confirmPurchase = function() {

		//console.log($rootScope.toPurchase);
	 }

	 $rootScope.user = $scope.user;

	$scope.buyGemAction = function(gem) {
		alert('You can buy this gem' + " " + gem.name + " at $ " + gem.price);
		//console.log(gem);

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
