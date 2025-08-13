const Animal = require('./animal.js');

class Adopcion extends Animal {
    nombreAnimal;
    collar;
    direccion;
    fechaAdopcion;

    constructor(id, nombre, edad, raza, nombreAnimal, collar, direccion, fechaAdopcion) {
        //
        super(id, nombre, edad, raza);
        this.nombreAnimal = nombreAnimal,
        this.collar = collar,
        this.direccion = direccion,
        this.fechaAdopcion = fechaAdopcion;
    }

    asignarDatos(collar, direccion, fechaAdopcion) {
        console.log(`Datos de adopción asignados: Collar - ${collar}, Dirección - ${direccion}, Fecha de Adopción - ${fechaAdopcion}`);
    }

    asignarNombre(nombre, nombreAnimal){
        console.log(`El nombre del ${nombre} es: ${nombreAnimal}`);
    }


}

module.exports = Adopcion;