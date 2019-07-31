function mostrar() {

    var num1;
    var num2;
    var resultado;

    num1 = parseInt(prompt(" Ingrese Primer numero "));
    num2 = parseInt(prompt(" Ingrese Segundo numero "));

    if (num1 == num2) {

        alert(num1 + " ES IGUAL A " + num2 );
    }

    else if (num1 > num2) {

        resultado = num1 - num2;
        alert(" La resta es " + resultado);
    }


    else {

        resultado = num1 + num2;
        alert(" La suma es " + resultado);

    }
    if (resultado>10) {

        alert(" La suma es " + resultado + " y supero el 10");
    }

    
}
