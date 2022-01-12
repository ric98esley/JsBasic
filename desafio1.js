var user;
var cpu;

const op1 = "Piedra";
const op2 = "Papel";
const op3 = "Tijera";

var resultado = function(user, cpu){
    if(user == "Piedra" && cpu == "Tijera"){
        console.log("El usuario GANO con " + user)
    }
    else if(user == "Papel" && cpu == "Piedra"){
        console.log("El usuario GANO con " + user)
    }
    else if(user == "Tijera" && cpu == "Papel"){
        console.log("El usuario GANO con " + user)
    }
    else if(user === cpu){
        console.log("Hubo un empate con " + user)
    }
    else{
        console.log("El Computador GANO con " + cpu)
    };
};
user = op3;
cpu = op2;

resultado(user, cpu);

