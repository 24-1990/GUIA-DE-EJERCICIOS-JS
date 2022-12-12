function calcularDescuento(origen, destino) {
    let descuento = 0;

    if (origen === "Palma" && destino === "La costa del Sol") {
        descuento = 0.05;
    } else if (destino === "Panchimalco") {
        descuento = 0.10;
    } else if (destino === "Puerto el Triunfo") {
        descuento = 0.15;
    }

    return descuento;
}
//
function calcularPrecio(origen, destino, precio) {
    let descuento = calcularDescuento(origen, destino);
    return precio - (precio * descuento);
}

console.log(calcularPrecio("Palma", "La costa del Sol", 600));
console.log(calcularPrecio("Palma", "Panchimalco", 480));
console.log(calcularPrecio("Palma", "Puerto el Triunfo", 590))