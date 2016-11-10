var gems=[
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurcase: true,
    soldOut: false,
    speciication: {},
    reviews: {},

},
{
  name: 'Pentagonal Gem',
  price: 5.95,
  description: '. . .',
  canPurcase: true,
  soldOut: false,
  speciication: {},
  reviews: {},
},
];

var app = angular.module('gemStore',[]);
app.controller('StoreController',function(){
	
    this.products = gems;
});

