/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var resultado;
var aumento;

sueldo = parseFloat(document.getElementById("sueldo").value);
resultado = parseFloat(document.getElementById("resultado").value);

aumento = sueldo * .1;

resultado = sueldo + aumento;

document.getElementById("resultado").value=resultado;
	
}
