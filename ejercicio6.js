function compra ( marca , precio ){
    precio
    precio_ford = precio - ( precio * 0.05)
    precio_focus = precio - ( precio * 0.10) 
    precio_escape = precio - ( precio * 0.20)
    switch(marca){
    case "ford fiesta":
 console.log("la marca de su coche es ford fiesta, y el precio es = " + precio +  "  y el precio con descuento = " + precio_ford );
break;
case "ford focus":
console.log("la marca de su coche es ford focus, y el precio es = " + precio +  "  y el precio con descuento = " + precio_focus );
break;
case "ford escape":
console.log("la marca de su coche es ford escape , y el precio es = " + precio +  "  y el precio con descuento = " + precio_escape );
break;
default: 
console.log(" la marca de su coche no aplica decuento")

    }
}
compra( "ford fiesta",7000 ) 