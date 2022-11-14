//Valor entrada
const valorTicket=200;

//Variables de descuento
var Estudiante=80;
var Trainee=50;
var Junior=15;

//Info desde Inputs
var nombre =document.getElementById("Nombre");
var apellido =document.getElementById("Apellido");
var correo =document.getElementById("Correo");
var cantidad =document.getElementById("Cantidad");
var categoria =document.getElementById("Categoria");
var totalTickets

function total_a_pagar()
{
    let formIsCorrect = true;
    if ( nombre.value ==="")
    {
        alert("Falta ingresar nombre")
        formIsCorrect = false;
    }

    if (apellido.value==="")
    {
        alert("Falta ingresar apellido")
        formIsCorrect = false;
    }

    if (correo.value==="")
    {
        alert("Falta ingresar correo")
        formIsCorrect = false;
    }
    
    if ( cantidad.value ==="" || isNaN(cantidad.value) )
    {
        alert("Falta ingresar cantidad")
        formIsCorrect = false;
    }
    
    if(formIsCorrect)
    {
        totalPago.innerHTML="Total a Pagar: $  ";
        
        totalTickets=(cantidad.value)*valorTicket;    

        if (categoria.value==0)
        {
            totalTickets=totalTickets;
        }
    
        if (categoria.value==1)
        {
            totalTickets=totalTickets-(Estudiante/100*totalTickets);
        }
    
        if (categoria.value==2)
        {
            totalTickets=totalTickets-(Trainee/100*totalTickets)
        }
    
        if (categoria.value==3)
        {
            totalTickets=totalTickets-(Junior/100*totalTickets);
        }
    
        totalPago.innerHTML += totalTickets;
    }
}

//boton Resumen y Borrar
botonresumen.addEventListener("click",total_a_pagar);
botonborrar.addEventListener("click",reset_total_a_pagar);

    
function reset_total_a_pagar()
{
    totalPago.innerHTML="Total a Pagar:";
    nombre.value="";
    apellido.value="";
    correo.value="";
    cantidad.value="";
    categoria.value=0;
}