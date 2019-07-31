function mostrar() {
	
var contador = 0;
	var numero = 0;
	var acumulador = 0;
	var respuesta = 'si';

	while (respuesta=='si') {

		numero = parseInt(prompt(" Ingrese numero"));
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt(" Quiere ingresar otro numero ");

	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;
}

