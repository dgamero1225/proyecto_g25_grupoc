const listaUsuarios = {
    '1241654276':'897',
    '1567543288': '123',
    '1623902127': '095',
    '1254726212': '419'
};


const procesarDatos = () => {
    let seleccionCedula = document.getElementById('cedulaUsuario');
    let seleccionPassword = document.getElementById('entradaPassword');
    let cedula = seleccionCedula.value;
    let password = seleccionPassword.value;

    console.log(cedula);
    console.log(password);

    verificarDatos(cedula, password);
    
};

function verificarDatos(cedula, password){
    let validar = false;
    for(i in listaUsuarios) {
        
         if (i === cedula && listaUsuarios[i] === password) {  
             validar = true; 
         }
     };    
     if (validar === true) {
         alert('Cedula y password validos');
     }else{
         alert('la cedula o el password no coinciden');
     }
}


