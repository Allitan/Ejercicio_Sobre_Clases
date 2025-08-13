const Animal = require('./animal.js');

class Adopcion extends Animal {
    collar;
    direccion;
    fechaAdopcion;

    constructor(id, nombre, edad, raza, collar, direccion, fechaAdopcion) {
        //
        super(id, nombre, edad, raza);
        this.collar = collar,
        this.direccion = direccion,
        this.fechaAdopcion = fechaAdopcion;
    }

    asignarDatos(collar, direccion, fechaAdopcion) {
        console.log(`Datos de adopción asignados: Collar - ${collar}, Dirección - ${direccion}, Fecha de Adopción - ${fechaAdopcion}`);
    }
}

module.exports = Adopcion;