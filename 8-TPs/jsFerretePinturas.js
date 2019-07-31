/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados()  // para calcular de Fahrenheit a Centigrados es  C  =  ( Fahrenheit - 32 ) / 1.8
{
    var Temperatura;
    var centígrados;
    var Fahrenheit;

    Temperatura = parseFloat(document.getElementById("Temperatura").value);

    Fahrenheit = (Temperatura - 32) / 1.8;

    centígrados = Fahrenheit;

    alert(Temperatura + " Fahrenheit son " + centígrados + " centigrados ");


}

function CentigradosFahrenheit()  //  para calcular de Centigrados A Fahrenheit F = CENTIGRADOS * 1.8 + 32 C =
{

    var Temperatura;
    var centígrados;
    var Fahrenheit;

    Temperatura = parseFloat(document.getElementById("Temperatura").value);

    centrigrados = Temperatura * 1.8 + 32;

    Fahrenheit = centrigrados;

    alert(Temperatura + " centigrados son " + Fahrenheit + "  Fahrenheit ");



}
