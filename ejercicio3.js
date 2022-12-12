function calcularNota(examen,asistencia, tarea, investicacion){
    let nota1 = examen*0.20
    let nota2 = asistencia*0.10
    let nota3 = tarea* 0.40
    let nota4 = investicacion*0.30
    let notafinal = nota1 + nota2 + nota3 + nota4 
    return "la nota final es :" + notafinal
  
  }
  console.log(calcularNota(10,8,9,7))