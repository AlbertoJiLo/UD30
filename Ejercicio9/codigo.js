
//Creamos la función que comprueba si una palabra está en mayusculas, minusculas o ambas.

function tipoDeLetra(){
    //Pedimos al usuario una palabra y lo introducimos en la variable palabras

    var palabra= window.prompt("Introduce una cadena de caracteres");

    if(palabra == palabra.toUpperCase()){
        return alert("Solo hay mayusculas");
    }else if(palabra == palabra.toLowerCase()){
        return alert("Solo hay minisculas");
    }else{
        return alert("Hay una combinacion de mayusculas y minusculas")
    }
}

tipoDeLetra();