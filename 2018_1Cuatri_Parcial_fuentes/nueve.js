function mostrar()
{
 var producto;
 var peso;
 var temperatura;
 var respuesta='s';
 var temperaturapares=0;
 var flag=0;
 var pesomayor=0;
 var marcapesada;
 var productocerogrado=0;
 var promedio;
 var acumuladorpeso=0;
 var contadorpeso=0;
 var pesomaximo=0;
 var pesominimo=0;



 
 while ( respuesta=='s')
 
    {

        producto= prompt(" Ingrese el nombre del producto ");

        do {
        peso=parseInt(prompt(" Ingrese el peso "));
        } while ( isNaN(peso) || peso<1 || peso>100);


        do{
        temperatura=parseInt(prompt(" Ingrese la temperatura "));
        } while ( isNaN(temperatura) || temperatura<-30 || temperatura>30);

        respuesta= prompt(" Quiere Ingresar otro producto ? ");
    


        if ( temperatura%2 ==0 ){       // temperaturas pares

        temperaturapares++;
        }

         if ( producto> marcapesada || flag==0){         // el producto mas pesado.

            marcapesada= producto;
            flag=1;
         }

        else if ( temperatura<0 ){   //La cantidad de productos que se conservan a menos de 0 grados. 

            productocerogrado++;
        }        
        
        acumuladorpeso = peso + acumuladorpeso;
        contadorpeso++;    // El promedio del peso de todos los productos.	
        

        if( peso> pesomaximo || flag==0){

            pesomaximo=peso;

        }   
            if ( peso< pesominimo || flag==0) { 
            
            pesominimo=peso;
            flag=1;
            // El peso máximo y el mínimo.

            }
        
    
    
    }

    promedio= acumuladorpeso / contadorpeso;     // El promedio del peso de todos los productos.


    
    document.write(" a) La cantidad de temperaturas pares = " + temperaturapares + "<br>" );
    document.write(" b) La marca del producto más pesado = " + marcapesada + "<br>" ) ;
    document.write(" c) La cantidad de productos que se conservan a menos de 0 grados = " + productocerogrado + "<br>");
    document.write(" d) El promedio del peso de todos los productos = " + promedio + "<br>");	
    document.write(" f) El peso máximo = " + pesomaximo +  " El peso mínimo = " + pesominimo + "<br>");




}
