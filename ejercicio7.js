function calcularEdad(fecha){
    let diferencia =  Date.now() - fecha.getTime();
     fecha = new Date(diferencia);
     return Math.abs( fecha.getUTCFullYear() - 1990);
      }
      console.log(calcularEdad(new Date(2022, 2, 24 )));