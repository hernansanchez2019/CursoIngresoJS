function mostrar()
{  //Genero el número RANDOM entre 1 y 10 

        var nota;
       
        nota = Math.floor(Math.random() * 10 + 1);
        
        if (nota==9 || nota==10) {
       
           alert(" Nota : " + nota +  " Excelente " ); 
        }

        else if (nota>=4){

            alert(" Nota: " + nota + " Aprobo ");

        }

        else { 

            alert(" Nota: " + nota + " vamos la proxima se puede ");
        }
       
       
	
}//FIN DE LA FUNCIÓN