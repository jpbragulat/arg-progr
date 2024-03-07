const $form = document.querySelector("#carta-a-santa");
const nombre = $form.nombre.value;
const ciudades = $form.ciudad.value;

function validarNombre(){
    if(nombre.length === 0){
        console.log("El nombre debe tener ma");
    }
}

console.log(nombre);
console.log(ciudades);