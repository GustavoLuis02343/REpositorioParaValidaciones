function validacionPass(){
    var p1=document.getElementById("pass").Value
    var p2=document.getElementById("pass2").Value
    if(p1!=p2){
        alert("Confirma correctamente tu password")
        return
    }
}
