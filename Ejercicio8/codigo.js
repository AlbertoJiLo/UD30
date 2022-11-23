
//Creamos la función que comprueba si el número es par

function esPar(){
    //Pedimos al usuario un número y lo introducimos en la variable numero

    var numero = window.prompt("Introduce un numero");

    if(numero%2==0){
        return alert("El numero "+numero+" es par.");
    }else{
        return alert("El numero "+numero+" es impar.")
    }
}

esPar();