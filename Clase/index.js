const Animal = require("./models/animal.js");
const { canimal, canimal2, canimal3, adopcion, adopcion2, adopcion3 } = require("./inicializacion.js");
const Adopcion = require("./models/adopcion.js");

function Saludar(nombre) {
    console.log("Hola " + nombre);
}

//Saludar("Allan");


//canimal.id = 1;
//canimal.nombre = "Perro";
//console.log(canimal);
//console.log(canimal2);
//console.log(canimal3);

adopcion.asignarDatos("Rojo", "123 Calle Falsa", "2023-10-01");
adopcion.asignarNombre("Perro", "Labrador");

console.log(" ");

adopcion2.asignarDatos("Azul", "212 Calle Falsa", "2025-08-20");
adopcion2.asignarNombre("Gato", "Simba");

console.log(" ");

adopcion3.asignarDatos("Verde", "214 Calle Falsa", "2025-08-20");
adopcion3.asignarNombre("Caballo", "Pegaso");

console.log(" ");
console.log("*****************************************")
console.log("*****************************************")
console.log("*****************************************")
console.log(" ")

const animal1 = new Animal(4, "Perro", 6, "Pastor Aleman");
const animal2 = new Animal(5, "Perro", 3, "Aguacatero");
const animal3 = new Animal(6, "Gato", 1, "Burmes");
const animal4 = new Animal(7, "Gato", 2, "Persa");

console.log("listando animales");
canimal.ListarAnimales();

console.log(' ');

canimal.agregarAnimal(animal1);
canimal.agregarAnimal(animal2);
canimal.agregarAnimal(animal3);
canimal.agregarAnimal(animal4);

console.log(' ');

console.log("Listando Animales de nuevo");
canimal.ListarAnimales();

console.log(' ');

canimal.buscarAnimalPorId(6);
canimal.buscarAnimalPorId(4);

console.log('');

animal3.raza = "Angora";
canimal.actualizarAnimal(animal3);
canimal.buscarAnimalPorId(6);

console.log(' ');

canimal.eliminarAnimal(4);

console.log(' ');
console.log("Listando Animales Nuevamente");
canimal.ListarAnimales();