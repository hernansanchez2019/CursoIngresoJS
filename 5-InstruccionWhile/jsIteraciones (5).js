function mostrar()
{

var sexo = prompt("ingrese f ó m .");


while ( sexo!="f" &&  sexo!="m"){


alert( " sexo invalido ");
sexo = prompt("ingrese f ó m .");
sexo= sexo.tolowercase();
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN