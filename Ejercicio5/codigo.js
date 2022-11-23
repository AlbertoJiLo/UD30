//Creamos una variable con el array

var numero1 = 5;
var numero2 = 7;

//Comprobamos que numero1 sea más pequeño o igual que número2

if(numero1 < numero2 || numero1 == numero2){
    console.log("numero1 no es mayor que numero2");
}

//Comprobamos que numero2 sea mayor o igual a 0

if(numero2 > 0 || numero2 == 0){
    console.log("numero2 es positivo");
}

//Comprobamos que numero1 sea menor que 0 o que no sea cero

if(numero1 <0 || numero1 != 0){
    console.log("numero 1 es negativo o distinto de cero")
}

//Comprobamos que sumarle 1 a numero1 no hará que alcance o supere el valor del numero2

if( (numero1+1) < numero2 ){
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
}