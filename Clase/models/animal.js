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

    animales = [];

    agregarAnimal(agregaAnimal){
        console.log(`Agregando, ${agregaAnimal.nombre}, con id ${agregaAnimal.id}, con una edad de: ${agregaAnimal.edad}, de raza ${agregaAnimal.raza}`);
        this.animales.push(agregaAnimal)
    }

    ListarAnimales(){
        if(this.animales.length === 0){
            console.log("No hay animales")
        }

        this.animales.forEach((elemento, i) => console.log(`${elemento.id}. ${elemento.nombre}, ${elemento.raza}, ${elemento.edad}`))
    }


    buscarAnimalPorId(id){
        const animal = this.animales.find(elemento=> elemento.id === id)
        if(animal){
            console.log(`Encontramos a un ${animal.nombre} de raza ${animal.raza} con id ${animal.id}`);
        }else{
            console.log(`No se encontro ningun animal con el id ${id}`);
        }
    }

    actualizarAnimal(animalActualizado){
        let resultado = this.animales.find(animal=>animal.id === animalActualizado.id);
        if(resultado){
            resultado = animalActualizado;
            console.log(`Modificado el animal con id ${animalActualizado.id}`);
        } else {
            console.log(`No se encontro ningun animal con el id ${id}`)
        }
    }

    eliminarAnimal(id){
        this.animales = this.animales.filter(animal => animal.id !== id);
        console.log(`Se elimino el animal con id ${id}`)
    }
}

module.exports = Animal;