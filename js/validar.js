function sololetras(e){

    key=e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras=" abcdefghijklmnñopqrstuvwxyz";
    especiales="8-37-38-46-164";
    teclado_especial = false;
    for (var i in especiales) {
        if(key== especiales[i]){

            teclado_especial = true;
            break;
        }
        
    }

    if(letras.indexOf(teclado) == -1 && !teclado_especial){
        return false;

    }
    
}

function solonumeros(e){
        key=e.keyCode || e.which;
        teclado = String.fromCharCode(key);
         numero = "1234567890";
         especial = "8-37-38-46";
         teclado_especiales = false;

         for(var i in especial){
             if(key==especial[i]){
                 teclado_especiales = true;
             }
         }

         if(numero.indexOf(teclado)== -1 && !teclado_especiales){
             return false;

         }
}