function mostrar() {
    var nota;
    var sexo;
    var contador = 0;
    var acumuladornotas = 0;
    var contadornotas = 0;
    var promedio;
    var flag = 0;
    var notabaja = 0;
    var sexobajo;
    var contadorvarones = 0;
  
    while (contador < 5) {
      do {
        nota = parseInt(prompt(" Ingrese la nota "));
      } while (isNaN(nota) || nota < 0 && nota > 10);
  
  
      do {
        sexo = prompt(" Ingrese el sexo ");
      } while (sexo != "f" && sexo != "m");
  
  
      acumuladornotas = nota + acumuladornotas;
      contadornotas++;
      contador++;
       // la nota mas baja y el sexo de esa persona
  
       if (nota < notabaja || flag == 0) {
  
      notabaja = nota;
      sexobajo = sexo;
      flag = 1;
  
       }
  
       if (nota < notabaja && sexo < sexobajo) {
  
      notabaja = nota;
      sexobajo = sexo;
  
        }
  
         //La cantidad de varones que su nota haya sido mayor o igual a 6.
  
         if (nota >= 6 && sexo == "m") {
  
           contadorvarones++;
  
         }
  
    }
  
        // promedio de las notas 
  
        promedio = acumuladornotas / contadornotas;
        alert("a) El promedio de las notas totales = " + promedio + "\nb) La nota más baja y el sexo de esa persona = " + notabaja + sexobajo + "\nc) La cantidad de varones que su nota haya sido mayor o igual a 6 = " + contadorvarones);
  
  
  
  
  
  
  
  }
  