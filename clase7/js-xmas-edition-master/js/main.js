
const $form = document.querySelector("#carta-a-santa");

function validarNombre(nombre) {
    if(nombre.length === 0){
        return 'El campo nombre no puede estar vacio.';
    }
    else if(nombre.length >= 50 ){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    else {
        return '';
    }
    
}

function validarCiudad(ciudades) {
    if (ciudades.length === 0){
        return 'Debe elegir una ciudad.';
    }else{
        return '';
    }
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length >= 50){
        return 'El campo descripcion no puede ser tan largo';
    }
    else if(descripcionRegalo.length === 0){
        return 'El campo descripcion no puede estar vacio';
    }
    else  {
        return '';
    }
}

function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa");
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    
    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        ['descripcion-regalo']: errorDescripcionRegalo
    };

    console.log(errores);
    event.preventDefault();
    console.log('Cantidad de Errores:',manejarErrores(errores));
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $seccionErrores = document.querySelector('#seccionErrores');
    let contadorErrores = 0;

    

    keys.forEach(function(key){
        const error = errores[key];
               
        if(error){
            contadorErrores++;
            $form[key].className = "error";

            const $error = document.createElement('li');
            $error.innerText = error;
            $seccionErrores.appendChild($error);
        }else {
            if($seccionErrores.innerText !== ''){
            console.log('errores a borrar',$seccionErrores.innerText);
            $seccionErrores.innerText = '';
            }  
            $form[key].className = "";
        }
        
        
    });
    if(contadorErrores === 0){
        return 'No hay errores.';
    }else{
        return contadorErrores;
    }
}

$form.onsubmit = validarFormulario;



/* function manejarErrores(errores){
    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    if(errorNombre){
        $form.nombre.className = "error";
        alert(errorNombre);
    } else {
        $form.nombre.className = "formOK";
    }
    if(errorCiudad){
        $form.ciudad.className = "error";
        alert(errorCiudad);
    } else {
        $form.ciudad.className = "formOK";
    }
    if(errorDescripcionRegalo){
        $form['descripcion-regalo'].className = "error";
        alert(errorDescripcionRegalo);
    } else {
        $form['descripcion-regalo'].className = "formOK";
    }
} */