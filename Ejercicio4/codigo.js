//Creamos una variable con el array

var valores = [true,5,false,"hola","adios",2];

//Comprobamos la cadena de texto mayor

if(valores[3]<valores[4]){
    console.log("adios es mayor")
}else{
    console.log("hola es mayor")
}

//Comprobamos el true y el false.

if((valores[1]!=valores[5]) == valores[0]){
    console.log("5 no es igual a 2, por lo tanto este true se cumple")
}
if((valores[1]==valores[5]) == valores[2]){
    console.log("5 no es igual a 2, por lo tanto este false se cumple")
}

if(valores)

//Comprobamos la suma resta multiplicacion division y diferencia

console.log("Suma: "+(valores[1]+valores[5]));
console.log("Resta: "+(valores[1]-valores[5]));
console.log("Multiplicacion: "+(valores[1]*valores[5]));
console.log("División: "+(valores[1]/valores[5]));
console.log("Diferencia: "+(valores[1]%valores[5]));

