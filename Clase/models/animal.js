//clases - POO.

class Animal {
    //propiedades - Atributos
    id;
    nombre;
    edad;
    raza;
    
    // Constructor
    constructor(id, nombre, edad, raza) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    //Metodo - Funciones
    saludar(nombre){
        console.log(`Hola ${nombre}, soy un ${this.nombre}`);
    }

    decirRaza() {
        console.log(`Soy un ${this.raza}`);
    }

    decirEdad() {
        console.log(`Tengo ${this.edad} años`);
    }

}

module.exports = Animal;