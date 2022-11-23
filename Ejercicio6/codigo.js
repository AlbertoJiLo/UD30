//Creamos una variable con el array

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Pediremos a través de un pop up al usuario que introduzca un DNI y una letra poniendole ya uno valido por defecto 
//(Por comodidad para el ejercicio)

var numdni = window.prompt("Introduce un DNI", "48020304");
var letradni = window.prompt("Introduce una letra","F");

//Funcion para obtener la letra


    if(numdni < 0 || numdni > 99999999){
        alert("El numero introducido es invalido");
    }else{
        if(letradni == letras[numdni%23]){
            alert("La letra indicada está correctamente asociada al número")
        }else{
            alert("La letra indicada no está correctamente asociada al número")
        }
    }
