function cotizar(){
    if(document.getElementById("valor").value > 0 && document.getElementById("planes").value != ""){ 

        let valorAuto = document.getElementById("valor").value;
        let enganche = valorAuto *.30;
        document.getElementById("txtEnganche").value = enganche;    
        let mes = document.getElementById("planes").value;
        let interes;
        let num;
        switch(mes){
            case "12":
                interes = 12.5;
                num = 12;
                break;

            case "18":
                interes = 17.2;
                num = 18;
                break;

            case "24":
                interes = 21;
                num = 24;
                break;

            case "36":
                interes = 26;
                num = 36;
                break;

            case "48":
                interes = 45;
                num = 48
                break;
        } 
        let valorConEnganche = valorAuto - enganche;
        let totalFinanciar = ((valorAuto - enganche) + ((valorAuto - enganche) * interes/100));
        document.getElementById("txtFinanciar").value = totalFinanciar
        pagoMensual = totalFinanciar/num;
        document.getElementById("txtPago").value = pagoMensual
    }else{
        alert("Opcion no valida")
    }
    
    
}

function limpiar(){
    document.getElementById('valor').value="";
    document.getElementById('txtEnganche').value ="";
    document.getElementById('txtFinanciar').value =""; 
    document.getElementById('txtPago').value ="";
    document.getElementById('planes').value="";
}