function mostrar() {
    var nota=0;
    var suma=0;
    var sexo;
    var contador=5;
    var promediototal;

    nota = parseInt(prompt(" Ingrese Nota "));
    sexo = prompt(" sexo de alumno ");

    while (contador<=5 && nota<=10 && sexo=="f" && sexo=="m"){

        suma= suma+nota;
        contador++;
        promediototal= suma;

    
    }
    alert(promediototal);




    

 

    
    

}
