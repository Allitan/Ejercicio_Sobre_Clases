const Animal = require("./models/animal.js");
const { canimal, canimal2, canimal3, adopcion } = require("./inicializacion.js");
const Adopcion = require("./models/adopcion.js");

function Saludar(nombre) {
    console.log("Hola " + nombre);
}

Saludar("Allan");


//canimal.id = 1;
//canimal.nombre = "Perro";
console.log(canimal);
console.log(canimal2);
console.log(canimal3);

console.log(adopcion);

adopcion.asignarDatos("Rojo", "123 Calle Falsa", "2023-10-01");

//canimal.saludar("Allan");
//canimal.decirRaza();
//canimal.decirEdad();

//canimal2.saludar("Maria");
//canimal2.decirRaza();
//canimal2.decirEdad();