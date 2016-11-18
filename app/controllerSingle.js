angular.module('valveStore')
.controller('ControllerSingle',function($rootScope, $scope){

alert('sono nel controller single');
  $scope.products = [
	  {
		name: 'Performance',
		price: 2.95,
		description: 'In venti anni di storia abbiamo realizzato prodotti per soddisfare le richieste dei nostri clienti in tutto il mondo. A distanza di tempo le richieste sono cambiate, e per questo abbiamo dato una nuova veste ai nostri prodotti più famosi e prestigiosi, proponendo versioni riviste e aggiornate. Il nuovo amplificatore integrato Performance aumenta la potenza, rimanendo fedele al look vincente dell’originale, considerato un’icona di rara eleganza e piacevolezza.',
		img : '/images/grid4.jpg',
		}
	];


	$scope.user = [
		{
			productName: '',
			name: '',
			surname: '',
			cardNumber: '',
		},
	];


    $scope.toPurchase = [];
    $rootScope.user = $scope.user;
	$rootScope.products = $scope.products;

	$scope.testAction = function(ampli) {
		alert('test');
	};


	$scope.buyAction = function(ampli) {
		alert('You can buy this ampli' + " " + ampli.name + " at $ " + ampli.price);

		var selectedAmpli = ampli;
		var i=0;
		var ins=0;

		while(i<=$rootScope.toPurchase.length){
			if($rootScope.toPurchase.length === 0){
				$rootScope.toPurchase[i]=selectedAmpli;
				ins=i;
				i++;
			}
			 else if($rootScope.toPurchase[i] === selectedAmpli){
				alert('WARNING: You have alredy purchased this ampli');
				i++;
				break;
			}
			else if(++i>$rootScope.toPurchase.length){
				if(selectedAmpli === $rootScope.toPurchase[ins]){
					break;
				}
				else{
					$rootScope.toPurchase[i-1] = selectedAmpli;
					ins=$rootScope.toPurchase.length;
					break;
				}
			}
		}
	 }
});
