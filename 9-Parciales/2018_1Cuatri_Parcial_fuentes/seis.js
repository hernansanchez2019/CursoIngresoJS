function mostrar() 

{
   
    var hora;

    hora = parseInt(document.getElementById("laHora").value);

    

      switch (hora)
     {

        case 6:
            alert(" es de mañana ");
            break;

        case 7:
            alert(" es de mañana ");
            break;

        case 8:
            alert(" es de mañana ");
            break;

        case 9:
            alert(" es de mañana ");
            break;

        case 10:
            alert(" es de mañana ");
            break;

        case 11:
            alert(" es de mañana ");
            break;

        case 12:
            alert(" es de tarde ");
            break;

        case 13:
            alert(" es de tarde ");
            break;

        case 14:
            alert(" es de tarde ");
            break;

        case 15:
            alert(" es de tarde ");
            break;

        case 16:
            alert(" es de tarde ");
            break;

        case 17:
            alert(" es de tarde ");
            break;

        case 18:
            alert(" es de tarde ");
            break;

        case 19:
            alert(" es de tarde ");
            break;

           default:
           
           if (hora>19 && hora<=24){

                alert(" es de noche ");
                alert(" a dormir ");
            }

            else if ( isNaN(hora) || hora<0 || hora>24){

                alert( " no es una hora valida")
            }
    }
        
    
}
