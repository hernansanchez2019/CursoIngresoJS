function mostrar() {

    var numeros;
    var letra;
    var respuesta='s';
    var contador = 0;
    var contadorpares = 0;
    var contadorimpares = 0;
    var contadorceros = 0;
    var acumuladorpositivos = 0;
    var promedio;
    var contadorpositivos = 0;
    var acumuladornegativos = 0;
    var numeromaximo;
    var letramaximo;
    var numerominimo;
    var letraminimo;
    var flag = 0;

    
        
 do {
            
                 numeros = parseInt(prompt(" Ingrese un numero"));
             
             
                 while (!( numeros>= -100 || numeros<= 100)) {
                 numeros= parseInt(prompt(" Reingrese numeros "));

                 }
        
        letra = prompt(" Ingrese una letra ");
        
        respuesta= prompt(" Quiere ingresar otro numero y letra ? ");
        
        contador++;
        
    
    
    
        if (numeros % 2 == 0) 
        {     //  La cantidad de números pares. 
        
        contadorpares++;
            }
    
        else {
        
            contadorimpares++;    //  La cantidad de números impares. 
            }
    
    
        if (numeros == 0) {
        
        contadorceros++;        // contador de ceros.
        }
    
    
    
        
    
        if (numeros < 0) {
        
            
            acumuladornegativos = numeros + acumuladornegativos;    // La suma de todos los números negativos. 
             
        } 
             else {
                 
                acumuladorpositivos = numeros + acumuladorpositivos;
                contadorpositivos++;
    
             }
    
        if (numeros > numeromaximo || flag == 0) {             // El número y la letra del máximo y el mínimo.
        
        numeromaximo = numeros;
        letramaximo = letra;
        }
    
            if (numeros < numerominimo || flag == 0) {
        
            numerominimo = numeros;
             letraminimo = letra;
             flag = 1;
        }
    
    
    
 } while (respuesta == 's');
    
    
    
    promedio = acumuladorpositivos / contadorpositivos;     // El promedio de todos los números positivos ingresados. 
    
    
    document.write(" a) La cantidad de números pares = " + contadorpares + "<br>");
    document.write(" b) La cantidad de números impares = " + contadorimpares + "<br>");
    document.write(" c) La cantidad de ceros = " + contadorceros + "<br>");
    document.write(" d) El promedio de todos los números positivos ingresados = " + promedio + "<br>");
    document.write(" e) La suma de todos los números negativos = " + acumuladornegativos + "<br>");
    document.write(" f) El número y la letra del máximo y el mínimo = " + " numero maximo y letra = " + numeromaximo + letramaximo + " numero minimo y letra = " + numerominimo + letraminimo);
    
    
}
