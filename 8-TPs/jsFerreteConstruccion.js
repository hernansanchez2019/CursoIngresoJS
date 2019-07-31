/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {


    var Largo;
    var Ancho;
    var Radio;
    var resultado;

    Largo = parseInt(document.getElementById("Largo").value);
    Ancho = parseInt(document.getElementById("Ancho").value);
    resultado = Largo * Ancho * 3;

    alert(" La cantidad de alambre a comprar es " + resultado + " metros ");

}


function Circulo() {
    var Largo;
    var Ancho;
    var Radio;
    var resultado;

    Largo = parseInt(document.getElementById("Largo").value);
    Ancho = parseInt(document.getElementById("Ancho").value);
    Radio = parseFloat(document.getElementById("Radio").value);
    resultado = Radio * 3.14 * 3;

    alert(" La cantidad de alambre a comprar es " + resultado + " metros ");


}
function Materiales() {

    var Largo;
    var Ancho;
    var Radio;
    var resultado;
    var cemento;
    var cal;

    Largo = parseInt(document.getElementById("Largo").value);
    Ancho = parseInt(document.getElementById("Ancho").value);
    cemento = Largo + Ancho * 2;
    cal = Largo + Ancho * 3;

    alert(" Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal ");


}

