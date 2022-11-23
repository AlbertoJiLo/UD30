
//Pedimos al usuario que nos indice un numero

var numero = window.prompt("Introduce un numero");
var resultado = numero;
var i = numero

//Calculamos el factorial a través de un for

for(i; i>1; i--){
    resultado=resultado*(i-1);
}

//Mostramos el resultado

alert("El factorial de "+numero+ " es "+resultado)
