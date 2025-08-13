const Animal = require('./models/animal.js');
const Adopcion = require('./models/adopcion.js');

const canimal = new Animal(1, "Perro", 5, "Labrador");
const canimal2 = new Animal(2, "Gato", 5, "Siames");
const canimal3 = new Animal(3, "Caballo", 5, "Pura Sangre");

const adopcion = new Adopcion(1, "Perro", 5, "Labrador", "Rojo", "123 Calle Falsa", "2023-10-01");

module.exports = {canimal, canimal2, canimal3, adopcion};