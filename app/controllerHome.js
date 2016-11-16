angular.module('gemStore')
.controller('ControllerHome',function($rootScope, $scope){
	$rootScope.toPurchase = [];

    $scope.products = [
	  {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Twelve sided polyhedron with all sides equidimensional and either rhombic or pentagonal. If the dodecahedron is composed of rhombs, it is known as a rhombic dodecahedron, or simply as a dodecahedron. If it is composed of pentagons, it is known as a pentagonal dodecahedron or pyritohedron. Minerals shaped as dodecahedrons belong to the isometric system.',
		canPurcase: true,
		soldOut: false,
		speciication: {},
		reviews: {},
		img : '/img/pentagonal.jpg',

		},
		{
		  name: 'Pentagonal Gem',
		  price: 5.95,
		  description: 'Twelve sided polyhedron with all sides equidimensional and either rhombic or pentagonal. If the dodecahedron is composed of rhombs, it is known as a rhombic dodecahedron, or simply as a dodecahedron. If it is composed of pentagons, it is known as a pentagonal dodecahedron or pyritohedron.Minerals shaped as dodecahedrons belong to the isometric system.',
		  canPurcase: true,
		  soldOut: false,
		  speciication: {},
		  reviews: {},
		  img: '/img/do.jpg',
		},
	];

	$scope.user = [
	{
		productName: '',
		name: '',
		surname: '',
		iban: '',
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

		console.log("toPurchase Length: "+$rootScope.toPurchase.length);
	 }
});
