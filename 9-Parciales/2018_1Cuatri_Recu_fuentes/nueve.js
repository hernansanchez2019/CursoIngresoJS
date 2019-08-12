function mostrar()
{

    var nombre;
    var temperatura;
    var respuesta='s';
    var temperaturaspares=0;
    var flag=0;
    var nombrepesado;
    var temperaturapesado;
    var animalestemperaturabaja=0;
    var acumuladorpeso=0;
    var pesomaximo=0;
    var pesominimo=0;
    var contador=0;
    var contadorpeso=0;

    while ( respuesta=='s')
    
    {           

              nombre = prompt(" Ingrese el nombre del animal ")
            
        
               do {

                peso= parseInt(prompt(" Ingrese el peso  "));
              } while ( isNaN(peso) || peso<1 || peso>1000);


              do {

                temperatura= parseInt(prompt(" Ingrese la temperatura  "));
               } while ( isNaN(temperatura) || temperatura<-30 || temperatura>30);


                respuesta= prompt(" Quiere seguir ingresando animales ? ");

                contador++; 
            
            
               acumuladorpeso = peso + acumuladorpeso;
               contadorpeso++;

         

              if (  temperatura!=0 && temperatura %2 ==0 )
              {

                temperaturaspares++;
              }

             if ( peso>1 || flag==0) {

                nombrepesado = nombre;
                temperaturapesado= temperatura;
                


               }

               if ( peso> 1 && temperatura > temperaturapesado) {

                nombrepesado = nombre;
                temperaturapesado= temperatura; 
                flag=1;
               }

                else if ( temperatura <0 ) {

                        animalestemperaturabaja++;
                        
                       
                }


               


                if ( peso > pesomaximo && temperatura <0  && flag==0) {

                    pesomaximo = peso;
                
                }

                if ( peso > pesominimo  && temperatura < 0 ) {

                    pesominimo = peso;
                    flag=1;
                }

    
      }  promedio= acumuladorpeso / contadorpeso;


    document.write(" a) La cantidad de temperaturas pares = " + temperaturaspares + "<br>" );
    document.write(" b) El nombre y temperatura del animal más pesado = " + nombrepesado +  temperaturapesado + "<br>" );
    document.write(" c) La cantidad de animales que viven a menos de 0 grados = " + animalestemperaturabaja + "<br>" );
    document.write(" d) El promedio del peso de todos los animales = " + promedio + "<br>" ); 
    document.write(" f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero =  " + " peso maximo = " + pesomaximo + " peso minimo = " + pesominimo + "<br>" );  

}
