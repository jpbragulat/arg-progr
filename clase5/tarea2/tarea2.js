
ingresar.onclick = function(){
    const MSG_BIENVENIDA = 'Bienvenido usuario: ';
    const nombre = document.querySelector('#nombre-usuario').value;
    const segundoNombre = document.querySelector('#segundoNombre-usuario').value;
    const apellido = document.querySelector('#apellido-usuario').value;
    const edad = Number(document.querySelector('#edad-usuario').value);
    console.log(nombre,segundoNombre,apellido,edad);
    document.querySelector('#titulo').innerHTML = MSG_BIENVENIDA + ' ' + nombre + ' ' + segundoNombre + ' ' + apellido;
    
    return false;
    
    
}