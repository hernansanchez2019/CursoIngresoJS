function mostrar()
{
 var edad;
 var estadoCivil;

 edad = parseInt(document.getElementById("edad").value);

if( edad>=18) {

    document.getElementById(" estadoCivil ").value = soltero;
    document.getElementById(" estadoCivil ").value = casado;
    document.getElementById(" estadoCivil ").value = divorciado;

    } 


 else  {  if ( edad<=18) {
                
         alert(" Es muy pequeño para NO ser soltero"); 
            }
              


        }
	


}