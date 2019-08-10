function mostrar() {
  var nombre;
  var peso;
  var tipo;
  var edad;
  var contador = 0;
  var promedio;
  var sumadorPeso = 0;
  var flag = 0;
  var edadMax;
  var cantidadAnimales=0;

  while (contador < 4) {

    do {
      peso = prompt(" Ingrese el peso ");
    } while (isNaN(peso) || peso < 1 || peso > 100);

    do {
      edad = prompt(" Ingrese la edad ");
    } while (isNaN(edad) || edad < 1 || edad > 25);

    do {
      tipo = prompt(" Ingrese el tipo de mascota ");
    } while (tipo != "perro" && tipo != "gato");

    nombre = prompt(" Ingrese el nombre de la mascota ");

    contador++;

    peso = parseInt(peso);
    sumadorPeso = sumadorPeso + peso;

  }
  promedio = sumadorPeso / contador;

  if (tipo == "perro" && flag == 0) {

    edadMax = edad;
    maxNombre = nombre;
    flag = 1;

  } if (tipo == "perro" && edad > edadMax) {

    edadMax = edad;
    maxNombre = nombre;

  }

  if ( peso <10 && edad >10 ){

    cantidadAnimales++
  }

  document.write("1- El promedio de los peso totales es : " + promedio + "<br>");
  document.write("2- El nombre del perro mas viejo : " + maxNombre + "<br>");
  document.write("3- La cantidad animales menores a 10 kilos de mas de 10 años " + cantidadAnimales + "<br>");


}



















