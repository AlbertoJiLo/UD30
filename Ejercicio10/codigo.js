
//Creamos la función que comprueba si una palabra o frase es un palindromo.

function esPalindromo(){
    //Pedimos al usuario una palabra y lo introducimos en la variable palabras para luego pasarla a minuscula para trabajar con ella.

    var palabra= window.prompt("Introduce una cadena de caracteres","Anna");
    var palabraMinus = palabra.toLowerCase();
    var palabraAlReves = "";

    //Con un for vamos a invertir la cadena para luego comprobar si coincide a la inversa con la palabra introducida

    for(var i = palabraMinus.length-1; i>=0; i--){
        palabraAlReves += palabraMinus.charAt(i);
    }

    //Comprobamos que las cadenas coinciden quitando los espacios por si hubiera más de una palabra

    if(palabraAlReves.replace(/\s+/g,'') == palabraMinus.replace(/\s+/g,'')){
        return alert(palabra+" es un palíndromo");
    }else{
        return alert(palabra+" no es un palíndromo");
    }
}

esPalindromo();