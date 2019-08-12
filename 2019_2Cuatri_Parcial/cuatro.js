function mostrar() 
{

  var letra;
  var numero;
  var respuesta='s';
  var contadorPares = 0;
  var contadorImpares = 0;
  var contadorCeros = 0;
  var promedio=0;
  var contadorPositivos = 0;
  var contadorNegativos=0;
  var acumuladorNegativos = 0;
  var acumuladorPositivos=0;
  var contador=0;

   while (respuesta == 's')
 { 
        
  
        do 
        {

          numero = parseInt(prompt(" Ingrese un numero entre -100 y 100 "));
        } while (isNaN(numero) || numero < -100 || numero > 100);


        do 
        {

          letra = prompt(" Ingrese una letra ");
        } while (isNaN(letra));
      
        
         respuesta = prompt(" Quiere seguir ingresando datos ? ");
      
        
       if (numero % 2 == 0) 
       {

        contadorPares++;
       }

       if (numero % 2 == 1) 
      {

       contadorImpares++;
      }
       
       if(numero < 0)
      
      {
          acumuladorNegativos += numero;
          contadorNegativos++;
        }

        else if ( numero > 0 ) 
        
        {
          acumuladorPositivos = numero + acumuladorPositivos;

        }
      

        if (contadorPositivos!= 0) 
      {
         contadorPositivos++;
         
       }     
       
       else if (numero==0)
      {

       contadorCeros++;
      
      }

  }

        if ( contadorPositivos!=0) 
        { 
        promedio = acumuladorPositivos / contadorPositivos;
      
        }


  document.write(" a) La cantidad de números pares = " + contadorPares + "<br>");
  document.write(" b) La cantidad de números impares = " + contadorImpares + "<br>");
  document.write(" c) La cantidad de ceros = " + contadorCeros + "<br>");
  document.write(" d) El promedio de todos los números positivos ingresados = " + promedio + "<br>");
  document.write(" e) La suma de todos los números negativos = " + acumuladorNegativos + "<br>");
 

}

