function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero=0;

	
	while(respuesta=='si' ){

		  numero= parseInt(prompt(" Ingrese numero "));
		  acumulador = acumulador + numero;
		  contador++;
		  respuesta= prompt(" quiere ingresar otro numero ? ");
		
	}


 document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN