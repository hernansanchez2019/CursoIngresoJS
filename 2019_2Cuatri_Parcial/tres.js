function mostrar()
{

var localidad;
var cantHabitantes;
var temperatura;
var respuesta;
var TemPares=0
var localidadBaja;
var tempAlta;
var promedio;
var temBaja;
var localidadTemp;
var contadorPares;

localidad= prompt(" Ingresar el nombre de la localidad ");
cantHabitantes= parseInt(prompt(" Ingrese cantidad de habitantes en millones entre 1 y 40 "));
temperatura= parseInt(prompt(" Ingrese la temperatura de esa localidad "));


do{

	if ( temperatura % 2 == 0){

		contadorPares++;
	}













} while ( respuesta=='s');










document.write("a) La cantidad de temperaturas pares " + TemPares + "<br>"); 
document.write("b) El nombre de la localidad con menos habitantes " + localidadBaja+ "<br>");
document.write("c) La cantidad localidades que superan los 40 grados de temperatura " + tempAlta + "<br>");
document.write("d) El promedio de habitantes entre las localidades ingresadas " + promedio + "<br>");
document.write("f) La temperatura mínima ingresada, y nombre de la localidad que registro esa temperatura " + temBaja + localidadTemp + "<br>");



}
