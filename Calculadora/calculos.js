function calcular(operacion){
    var val1= parseFloat(document.getElementById("v1").value)
    var val2= parseFloat(document.getElementById("v2").value)
    var res=document.getElementById("res")

    if(isNaN(val1) || isNaN(val2)){
        res.innerHTML="Datos nulos o incorrectos"
        if(isNaN(val1))
        {
            document.getElementById("v1").focus()
        }
        else{
            document.getElementById("v2").focus()
        }
        return
    }
    switch(operacion){
        case 'sumar' :res=val1+val2
        break;
        case 'restar':res=val1-val2;
        break;
        case'multiplicar':res=val1*val2;
        break;
        case'dividir':res=val1/val2;
        break;
        }
    document.getElementById('res').innerHTML=res;
}