const $form = document.querySelector("#carta-a-santa");
const nombre = $form.nombre.value;
const ciudades = $form.ciudad.value;

function validarNombre(){
    if(nombre.length < 2){
        console.log("El nombre debe contener al menos 2 caracteres.");
        return 'El nombre debe contener al menos 2 caracteres.';
    }
    else if(nombre.length > 150 ){
        console.log("El nombre no puede contener mas de 150 caracteres.");
        return 'El nombre no puede contener mas de 150 caracteres.';
    }
    else {
        return '';
    }
    
}

$form.onsubmit = validarNombre();
console.log(nombre);
console.log(ciudades);