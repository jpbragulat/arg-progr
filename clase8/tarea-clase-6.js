/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/




function agregarIntegrantes(cantidadIntegrantesFamilia){

    for (let i=0; i<cantidadIntegrantesFamilia; i++){
        const $nuevoDiv = document.createElement('div');
        $nuevoDiv.className = 'integrante-familiar';
    
        const $nuevoInput = document.createElement('input');
        $nuevoInput.type = 'number';
        const $nuevoLabel = document.createElement('label');
        $nuevoLabel.textContent = 'Ingrese Edad de Integrante ' + (i + 1);
        
        $nuevoDiv.appendChild($nuevoLabel);
        $nuevoDiv.appendChild($nuevoInput);
    
        const $nuevoIntegrante = document.querySelector('#formulario-familia');
        $nuevoIntegrante.appendChild($nuevoDiv);
    }

}

function borrarIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante-familiar');
    let contadorIntegrantesBorrados = 0;
    for (let i=0; i<$integrantes.length; i++){
        $integrantes[i].remove();
        contadorIntegrantesBorrados++;
    }
    alert(`${contadorIntegrantesBorrados} integrantes han sido borrados`);
}

function crearArrayNumeros(){
    const $integrantes = document.querySelectorAll('.integrante-familiar input');
    const numerosArray = [];

    for (let i=0; i<$integrantes.length; i++){
        numerosArray[i] = Number($integrantes[i].value);
    }
    return numerosArray;
}

function validarCantidadIntegrantes(cantidadIntegrantesFamilia){
    if(!/^[0-9]+$/i.test(cantidadIntegrantesFamilia)) {
        return 'El campo solo acepta numeros';
    }
         
    else if(cantidadIntegrantesFamilia === 0){
        return 'Debe agregar un numero de integrantes';
    }
        
    else if(cantidadIntegrantesFamilia >= 10){
        return 'La cantidad de integrantes no puede ser mayor a 10';
    }
    else {
        return '';
    }
}

function validarEdadIntegrantes(edad){
    
    if(edad === ''){
        return 'Debe ingresar un valor.';
    } 
    else if(edad > 110){
        return 'La edad no puede ser mayor a 110.';
    }
    else if(!/^[0-9]+$/i.test(edad)){
        return 'El campo solo acepta numeros';
    }
    else {
        return '';
    }

}

function validarCalcular(){
    const $integrantes = document.querySelectorAll('.integrante-familiar input');
    const errores = [];
    for(let i=0; i<$integrantes.length; i++){
        errores[i] = validarEdadIntegrantes($integrantes[i].value);
    }    
    console.log(errores);
    return errores;
}    



agregar.onclick = function() {
    let cantidadIntegrantesFamilia = 0;
    do{    
        cantidadIntegrantesFamilia = Number(prompt('Ingrese cantidad de integrantes de su familia: '));
        if(validarCantidadIntegrantes(cantidadIntegrantesFamilia) === ''){
            agregarIntegrantes(cantidadIntegrantesFamilia);
        }
    }while(validarCantidadIntegrantes(cantidadIntegrantesFamilia) !== '');
        
}
    


calcular.onclick = function() {
    let errores = [];
    errores = validarCalcular();
    let contadorErrores = 0;
    for(let i=0; i<errores.length; i++){
        if(errores[i] != ''){
            contadorErrores++;
        }
    }
    console.log(contadorErrores);
    if(contadorErrores === 0){
        const $seccionErrores = document.querySelector('#seccionErrores');
        $seccionErrores.innerText = '';
        document.querySelector('#mayor').innerHTML = 'Numero Mayor: ' + calcularNumeroMayor(crearArrayNumeros());
        document.querySelector('#menor').innerHTML = 'Numero Menor: ' + calcularNumeroMenor(crearArrayNumeros());
        document.querySelector('#promedio').innerHTML = 'Promedio: ' + calcularPromedio(crearArrayNumeros());
    }
    else{
        manejarErrores(errores); 
    }       

}

function manejarErrores(errores){
    const $seccionErrores = document.querySelector('#seccionErrores');
    $seccionErrores.innerText = '';
    let contadorErrores = 0;
    console.log("antes",errores);
    for(let i=0; i<errores.length; i++){
        if(errores[i]!== ''){
            contadorErrores++;
            const $error = document.createElement('li');
            $error.innerText = errores[i];
            $seccionErrores.appendChild($error);
        }
        else{
            if ($seccionErrores.innerText !== ''){
                $seccionErrores.innerText = '';
            }
        }
    }    
    return contadorErrores;
}
            
        
    


borrar.onclick = function() {
    const $integrantes = document.querySelectorAll('.integrante-familiar input');
    if($integrantes.length > 0){
        borrarIntegrantes();
    }
    else{
        alert('No hay integrantes para borrar!');
    }

}

reset.onclick = function() {
    document.querySelector('#mayor').innerHTML = 'Numero Mayor: ' + 0;
    document.querySelector('#menor').innerHTML = 'Numero Menor: ' + 0;
    document.querySelector('#promedio').innerHTML = 'Promedio: ' + 0;
    const $integrantes = document.querySelectorAll('.integrante-familiar input');
    for (let i=0; i<$integrantes.length; i++){
        $integrantes[i].value = 0;
    }
}
         
    
    

