function mostrar() {
    var precio;
    var porcentaje;
    var preciofinal;

    precio = parseInt(prompt(" Ingrese precio "));
    porcentaje = parseInt(prompt(" Ingrese porcentaje de descuento "));
    preciofinal= precio*porcentaje/100;

    document.getElementById("elPrecioFinal").value=preciofinal;

}
