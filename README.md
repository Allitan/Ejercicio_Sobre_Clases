# Gestion de animales

Esta aplicación gestiona animales, permite darlos en adopción.

# Requerimientos
- node 20 como mínimo.
- visual studio code (recomendado)

# Instrucciones
para ejecutar la aplicacion utilice el comando:

```
npm run start
```
se han incluido animales y adopciones de ejemplo para poder probar la aplicación en el archivo **inicializacion.js**

```javascript
const canimal = new Animal(1, "Perro", 5, "Labrador");
const canimal2 = new Animal(2, "Gato", 5, "Siames");
const canimal3 = new Animal(3, "Caballo", 5, "Pura Sangre");

const adopcion = new Adopcion(1, "Perro", 5, "Labrador", "Boby", "Rojo", "123 Calle Falsa", "2025-08-13");
const adopcion2 = new Adopcion(2, "Gato", 5, "Siames", "Simba", "Azul", "212 Calle Falsa", "2025-08-20");
const adopcion3 = new Adopcion(3, "Caballo", 5, "Pura Sangre", "Pegaso", "Verde", "214 Calle Falsa", "2025-08-20");
```