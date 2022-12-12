/*Ejercicio 1:
Crear una función con un parámetro llamado edad que permita calcular si una persona es mayor de edad o no. 
Utilizar para la condición el operador ternario.*/

function calcularEdad(edad) {
    /*if(edad >= 18 ){
        return "si es mayor de edad"
    }else{
      return "no es mayor de edad"  
    }*/
    let respuesta = edad>= 18? "si es mayor de edad":"no es mayor de edad"
    return respuesta;
    }
    calcularEdad(12)
    console.log(calcularEdad(20))