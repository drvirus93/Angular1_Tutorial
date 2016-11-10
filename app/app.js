var gems=[
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
  description: '. . .',
  canPurcase: true,
  soldOut: false,
  speciication: {},
  reviews: {},
  img: '/img/dodecahedron.jpg',
},
];

var app = angular.module('gemStore',[]);
app.controller('StoreController',function(){
	
    this.products = gems;
});

