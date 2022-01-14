var user;
var cpu;

const op1 = "Piedra";
const op2 = "Papel";
const op3 = "Tijera";

var resultado = function(user, cpu){
    if(user == op1 && cpu == op3){
        console.log("El usuario GANO con " + user)
    }
    else if(user == op2 && cpu == op1){
        console.log("El usuario GANO con " + user)
    }
    else if(user == op3 && cpu == op2){
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

