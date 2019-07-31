/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Sumar;



    PrecioUno = parseInt(document.getElementById("PrecioUno").value);
    PrecioDos = parseInt(document.getElementById("PrecioDos").value);
    PrecioTres = parseInt(document.getElementById("PrecioTres").value);

    Sumar = PrecioUno + PrecioDos + PrecioTres;

    alert(" La Suma es " + Sumar);



}
function Promedio() {

    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Promedio;
    var Suma;



    PrecioUno = parseInt(document.getElementById("PrecioUno").value);
    PrecioDos = parseInt(document.getElementById("PrecioDos").value);
    PrecioTres = parseInt(document.getElementById("PrecioTres").value);

    Sumar = PrecioUno + PrecioDos + PrecioTres;
    Promedio = Sumar / 3;

    alert(" El Promedio es " + Promedio);

}
function PrecioFinal() {
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Sumar;
    var PrecioFinal;
    var IVA;

    PrecioUno = parseInt(document.getElementById("PrecioUno").value);
    PrecioDos = parseInt(document.getElementById("PrecioDos").value);
    PrecioTres = parseInt(document.getElementById("PrecioTres").value);

    Sumar = PrecioUno + PrecioDos + PrecioTres;
    IVA = Sumar * .21;
    PrecioFinal = Sumar + IVA;


    alert(" El precio final es  " + PrecioFinal);







}