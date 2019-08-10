
function mostrar() {
  var numero;
  var lado1;
  var lado2;
  var lado3;
  var sumaDeLados;
  var perimetro;


  lado1 = parseInt(prompt(" Ingrese el 1° lado "));
  lado2 = parseInt(prompt(" Ingrese el 2° lado "));
  lado3 = parseInt(prompt(" Ingrese el 3° lado "));

  // verifico si es escaleno

  if (lado1!=lado2 && lado2!=lado3 && lado1!=lado3) {

    alert("1° lado = " + lado1 + "\n2°lado =  " + lado2 + "\n3° lado = " + lado3 + "\nEs un triangulo escaleno ");

  }

  // verifico si es equilatero
  else if ( lado1==lado2  &&  lado1==lado3){

    perimetro = lado1 + lado2 + lado3;


    alert("1° lado = " + lado1 + "\n2°lado =  " + lado2 + "\n3° lado = " + lado3 + "\nEs un triangulo equilatero " + "\nperimetro = " + perimetro);
  }


}
