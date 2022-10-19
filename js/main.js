function cotizar(){
    var txtval=document.getElementById('valor').value;
    txtvalor=txtval*1;
    var txtFin;
    var txtpago;
    var Planes= document.getElementById('planes').value;

    let txtenganche= txtval*0.3;
    document.getElementById('enganche').value=txtenganche;


    var interes;
    switch(Planes){
        case "12":
            interes=12.5;
            break;
        case "18":
            interes=17.2;
            break;
        case "24":
            interes=21;
            break;
        case "36":
            interes=26;
            break;
        case "48":
            interes=45;
            break;
        default:
            break;
    }
    
    txtFin= Number(txtval - txtenganche + (txtval*(interes/100)) );
    txtpago=txtFin/Planes;
    txtpago=txtpago.toFixed(2);
    document.getElementById('total').value=txtFin +" MXN";
    document.getElementById('Pago').value=txtpago +" MXN";
    
    
}

function limpiar(){
    document.getElementById('valor').value="";
    document.getElementById('total').value ="";
    document.getElementById('Pago').value =""; 
    document.getElementById('planes').value ="";
    document.getElementById('enganche').value="";
}