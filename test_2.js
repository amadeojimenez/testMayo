//----------------------------------------------- 2

const objectA = {nombre: {hola:'hola',adios:'adios'}, animalFavorito:'Animal no elegido', colorFavorito:'Color no elegido'};
const objectB = objectA;
const objectC = objectA;

objectB.nombre = 'Amadeo';
objectB.animalFavorito = 'Tortugas';
objectB.colorFavorito = 'Amarillo';

objectC.nombre = 'Karen';
objectC.animalFavorito = 'Zebras';
objectC.perfume = 'Hugo Boss';

const objectD = objectA;
objectD = objectB;

console.log(objectD.animalFavorito);


//what will be printed?





