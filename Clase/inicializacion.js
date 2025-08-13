const Animal = require('./models/animal.js');
const Adopcion = require('./models/adopcion.js');

const canimal = new Animal(1, "Perro", 5, "Labrador");
const canimal2 = new Animal(2, "Gato", 5, "Siames");
const canimal3 = new Animal(3, "Caballo", 5, "Pura Sangre");

const adopcion = new Adopcion(1, "Perro", 5, "Labrador", "Boby", "Rojo", "123 Calle Falsa", "2025-08-13");
const adopcion2 = new Adopcion(2, "Gato", 5, "Siames", "Simba", "Azul", "212 Calle Falsa", "2025-08-20");
const adopcion3 = new Adopcion(3, "Caballo", 5, "Pura Sangre", "Pegaso", "Verde", "214 Calle Falsa", "2025-08-20");

module.exports = {canimal, canimal2, canimal3, adopcion, adopcion2, adopcion3};