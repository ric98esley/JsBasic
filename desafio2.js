var user;
var cpu;

const op1 = "piedra";
const op2 = "papel";
const op3 = "tijera";

var resultado = function(user, cpu){
    switch(true){
    case ( user == op1 && cpu == op3):
        console.log("El usuario GANO con " + user);
        break;
    case ( user == op2 && cpu == op1):
        console.log("El usuario GANO con " + user);
        break;
    case ( user == op3 && cpu == op2):
        console.log("El usuario GANO con " + user);
        break;
    case ( user === cpu):
        console.log("Hubo un empate con " + user)
        break;
    default:
        console.log("El Computador GANO con " + cpu)
}
};

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera ");
user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
cpu = options[Math.floor(Math.random() * 3)];

resultado(user, cpu);