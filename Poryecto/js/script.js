function validaciones() {
    let valida;
    valida=validarPassword();
    if (valida==false) {
        return false;
    }
    valida=validarEdad();
    if (valida==false) {
        return false;
    }
    return true;
}

function validarPassword() {
    var pass1=document.getElementById("txtPass1").value;
    var pass2=document.getElementById("txtPass2").value;
    if (pass1==pass2) {
        //alert('OK');
        console.log('OK')
        let largo= pass1.length;
        let largo2=pass2.length;
        if (largo<5) {
            Swal.fire('Largo Pass 1 incorrecto');
            return false;
        }
        if(largo2<5){
            Swal.fire('Largo Pass 2 incorrecto');
            return false;
        }
        return true;
    }else{
        Swal.fire('Pass no son iguales');
        //alert('Pass no son iguales');
        return false;
    }
}
