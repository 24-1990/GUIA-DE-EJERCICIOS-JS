/*Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. Deberá demostrar 
en consola los datos del empleado y el aumento salarial 
CATEGORIA AUMENTO 
A 15%
B30% 
C 10%
D20%*/

const nombre = "Raquel Diaz";
const salario = 900;
const categoria = "A";
let aumento;
if( categoria === "A") {
   aumento = salario *0.15;
}else if( categoria === "B") {
    aumento; salario * 0.30;
}else if( categoria === "D") {
    aumento; salario * 0.10;
}else if( categoria === "C") {
    aumento; salario * 0.20;
    }
console.log(`El empleado: ${nombre}.\ntiene un salario de: $${salario} dolares. \nSu categoría es: "${categoria}"\nPor lo que su aumento es de: $${aumento} y su nuevo salario con aumento es: $${salario + aumento} dolares.`);










/*let arreglo_trabajador = [
    {
        "nombre" : "maria miranda",
        "salario"  :1000,
        "categoria" : "A"
},
        
    
    {
        "nombre" : "Juan pablo",
        "salario"  :700,
        "categoria" : "B"
    },
    {
        "nombre" : "Diana fontanez",
        "salario"  :500,
        "categoria" : "C"
    },
    {
        "nombre" : "sanchez ceren",
        "salario"  :300,
        "categoria" : "D"
    },

]
 let salario_total = 0;
arreglo_trabajador.forEach(item_trabajador => {
    /*console.console.log(item_trabajador.nombre);

    if(item_trabajador.categoria == "A"){
     salario_total = (item_trabajador.salario * 0.15) + item_trabajador.salario;
    console.log(
    "nombre trabajador: " + item_trabajador.nombre  +  "\n" +  
    "salariototal: " + salario_total + "\n"  +
    "categoria " + item_trabajador.categoria);

    }else if(item_trabajador.categoria == "B"){
        salario_total = (item_trabajador.salario * 0.30) + item_trabajador.salario;
       console.log( 
    "nombre trabajador: " + item_trabajador.nombre  +  "\n" +  
    "salariototal: " + salario_total + "\n" +
    "categoria: " +  + item_trabajador.categoria);
    
}else if(item_trabajador.categoria == "C"){
    salario_total = (item_trabajador.salario * 0.10) + item_trabajador.salario;
   console.log( 
"nombre trabajador: " + item_trabajador.nombre  +  "\n" +  
"salariototal: " + salario_total + "\n" +
"categoria: " + item_trabajador.categoria);

}else if(item_trabajador.categoria == "D"){
        salario_total = (item_trabajador.salario * 0.20) + item_trabajador.salario;
       console.log( 
    "nombre trabajador: " + item_trabajador.nombre  + "\n" +   
    "salario total: " + salario_total + "\n" + 
    "categoria: " + item_trabajador.categoria
    
    );

      }    

   })
for(let i=0; i < arreglo_trabajador.length; i ++){

}
*/

   