function mostrar() {
	var numeros;
	var respuesta = 's';
	var numeromaximo = 0;
	var numerominimo = 0;
	var flag = 0;


	do {

		numeros = parseInt(prompt(" Ingrese numero "));
		
		respuesta = prompt(" Quiere ingresar otro numero ? ");

	 

		 if (numeros > numeromaximo || flag == 0) 
		 {

		numeromaximo = numeros;
	
		}


	     

			if (numeros < numerominimo || flag == 0) {
	
			numerominimo = numeros;
				flag = 1;
	}


	}while (respuesta == 's')


	document.getElementById("maximo").value = numeromaximo;
	document.getElementById("minimo").value = numerominimo;


}