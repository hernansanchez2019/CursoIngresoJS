function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var seguir='si';
    var flag=0;
	
	while (seguir=='si'){
	contador= parseInt(prompt(" Ingrese numero "));
	
 
	if ( contador>= 0){

 positivo = positivo + contador;}

      else{
           
	  negativo = negativo * contador;
	  flag=1
      
   }
   seguir= prompt(" quiere ingresar otro numero ? ");}

    
document.getElementById('suma').value=positivo;
if ( flag==0){
	negativo=0; 
    }
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN