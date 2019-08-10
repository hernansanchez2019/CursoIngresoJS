function mostrar() {

  var letra;
  var numero = 0;
  var respuesta = 's';
  var contadorPares = 0;
  var contadorImpares = 1;
  var contadorCeros = 0;
  var promedio;
  var contadorPositivos = 0;
  var acumuladorNegativos = 0;

  while (respuesta == 's') {

    do {

      numero = prompt(" Ingrese un numero entre -100 y 100 ");
    } while (isNaN(numero) || numero < -100 || numero > 100);

    letra = prompt(" Ingrese una letra ");

    respuesta = prompt(" Quiere seguir ingresando datos ? ");

  }

  if (numero != 0 && numero % 2 == 0) {

    contadorPares++;
  }

  else if (numero = 1 && numero % 2 == 1) {

    contadorImpares++;
  }
  if (numero == 0) {

    contadorCeros++;
  }

  if (numero > 0) {
    acumuladorPositivos = numero + acumuladorPositivos;
    promedio = acumuladorPositivos / contadorPositivos;

  } else if (numero < 0) {

    acumuladorNegativos = numero + acumuladorNegativos;
  }

  document.write(" a) La cantidad de números pares = " + contadorPares + "<br>");
  document.write(" b) La cantidad de números impares = " + contadorImpares + "<b>");
  document.write(" c) La cantidad de ceros = " + contadorCeros + "<br>");
  document.write(" d) El promedio de todos los números positivos ingresados = " + promedio + "<br>");
  document.write(" e) La suma de todos los números negativos = " + acumuladorNegativos + "<br>");
}

