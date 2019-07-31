/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    var Cantidad;
    var Marca;
    var PrecioDescuento = 0;
    var lampara = 35;
    var descuento;
    var PrecioFinal;
    var IVA;

    Cantidad = parseInt(document.getElementById("Cantidad").value);
    Marca = document.getElementById("Marca").value;
    PrecioDescuento = parseInt(document.getElementById("PrecioDescuento").value);

    switch (Cantidad) {

        case "3":
            if (Marca == "ArgetinaLuz") {
                descuento = .15;
            }



            else if (Marca == "FelipeLamparas") {

                descuento = .10;
            }



            else {

                descuento = .5


            }



        case "4":
            if (Marca == "ArgentinaLuz" || Marca == "FelipeLamparas") {
                
                descuento =.25;
        
            }

            else {
                
                descuento = .20;}
                
        case "5":
            if (Marca == "ArgetinaLuz"){
            
            descuento = .40;
        }
            
              else {

                descuento = .30;
                

            }


        case "6":
            if (Cantidad >= 6){
                Cantidad = Cantidad * 35;
            descuento = Cantidad * 50 / 100;
            

    }






}





if (PrecioDescuento > 120) {


    IVA = PrecioDescuento + .10;
    PrecioDescuento =
        alert("  Usted pago " + PrecioFinal +  );


}
document.getElementById("PrecioDescuento").value = PrecioDescuento;




}










