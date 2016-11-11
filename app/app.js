angular.module('gemStore',[])
.controller('StoreController',function($scope){
	$scope.toPurchase = [];
	
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
	
    $scope.confirmPurchase = function() {
		
		console.log($scope.toPurchase);
	 }	
	 
	$scope.buyGemAction = function(gem) {
		alert('You can buy this gem' + " " + gem.name + " at $ " + gem.price);		
		//console.log(gem);	
		
		var selectedGem = gem;
		var i=0;
		var ins=0;
		
		while(i<=$scope.toPurchase.length){
			if($scope.toPurchase.length === 0){
				$scope.toPurchase[i]=selectedGem;
				ins=i;
				i++;
			}
			 else if($scope.toPurchase[i] === selectedGem){
				alert('WARNING: You have alredy purchased this gem');
				i++;
				break;
			}    
			else if(++i>$scope.toPurchase.length){
				if(selectedGem === $scope.toPurchase[ins]){
					break;
				}
				else{
					$scope.toPurchase[i-1] = selectedGem;
					ins=$scope.toPurchase.length;
					break;
				}
      
			}	
		}
		alert('sono fuori ' +ins);
		console.log("toPurchase Length: "+$scope.toPurchase.length);
	 }
	 
	 
});
