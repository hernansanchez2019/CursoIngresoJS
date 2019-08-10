function mostrar() {

  var localidad;
  var cantidadHabitantes;
  var temperatura;
  var respuesta = 's';
  var contadorPares = 0;
  var flag = 0;
  var localidadMenosHabitantes;
  var menor;
  var nombreMenoshabitantes;
  var contadordetemperaturasaltas = 0;
  var acumuladorhabitantes = 0;
  var contadorHabitantes = 0;
  var minimoTemperatura = 0;
  var nombreminimoTemperatura;
  var contador = 0;
  var promedio;




  while (respuesta == 's') {


    localidad = prompt(" Ingrese localidad ");

    do {

      cantidadHabitantes = prompt(" Ingrese cantidad de habitantes entre 1 y 40");
    } while (isNaN(cantidadHabitantes) || cantidadHabitantes < 1 || cantidadHabitantes > 40);

    cantidadHabitantes = parseInt(cantidadHabitantes);


    do {

      temperatura = prompt(" Ingrese la temperatura de esa localidad");
    } while (isNaN(temperatura) || temperatura < -50 || temperatura > 50);

    respuesta = prompt(" quiere ingresar otra localidad ");

    if (temperatura != 0 && temperatura % 2 == 0) {

      contadorPares++;
    }

    if (flag == 0 || cantidadHabitantes < menor) {

      menor = cantidadHabitantes;
      nombreMenoshabitantes = localidad;
      flag == 0;

    }

    if (temperatura > 40) {

      contadordetemperaturasaltas++
    }




    if (contador == 0 || temperatura < minimoTemperatura) {

      minimoTemperatura = temperatura;
      nombreminimoTemperatura = localidad;
    }
    acumuladorhabitantes = acumuladorhabitantes + cantidadHabitantes;
  }
  promedio = acumuladorhabitantes / contadorHabitantes;


  document.write("a) La cantidad de temperaturas pares " + contadorPares + "<br>");
  document.write("b) El nombre de la localidad con menos habitantes " + nombreMenoshabitantes + "<br>");
  document.write("c) La cantidad localidades que superan los 40 grados de temperatura " + contadordetemperaturasaltas + "<br>");
  document.write("d) El promedio de habitantes entre las localidades ingresadas " + promedio + "<br>");
  document.write("f) La temperatura mínima ingresada, y nombre de la localidad que registro esa temperatura " + minimoTemperatura + nombreMenoshabitantes + "<br>");



}
