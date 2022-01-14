// Funcion construtora
function auto (marca, modelo, annio) {
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio
};
// Variables a usar
var autos = [];
var cantAutos = 0;
// Pregunta al usuario cuantos autos va a registrar
cantAutos = prompt('Cuantos autos desea registrar');
// transforma a tipo numero la variable
cantAutos = Number(cantAutos);
// Inicia el ciclo for preguntando en cada ciclo si la
// cantidad de objetos guardados en el array es menor a la
// cantidad de autos a registrar
for (i = 0 ; cantAutos > autos.length; i++) {
    alert(`Ingrese el auto numero: ${i+1}` )
    let marca = prompt('Marca: ');
    let modelo = prompt('Modelo: ');
    let annio = prompt('Año: ');

    var autoNuevo = new auto(marca, modelo, annio);

    autos.push(autoNuevo);
}

console.log(autos);