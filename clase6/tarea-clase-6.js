/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//const cantidadIntegrantesFamilia = Number(prompt('Ingrese cantidad de integrantes de su familia: '));
//console.log(cantidadIntegrantesFamilia);

//agregarIntegrantes(cantidadIntegrantesFamilia);


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
    for (let i=0; i<$integrantes.length; i++){
        $integrantes[i].remove();
    }
    alert(`${i} integrantes han sido borrados`);
}

agregar.onclick = function() {
    const cantidadIntegrantesFamilia = Number(prompt('Ingrese cantidad de integrantes de su familia: '));
    agregarIntegrantes(cantidadIntegrantesFamilia);
}

calcular.onclick = function() {
    const $integrantes = document.querySelectorAll('.integrante-familiar input');
    
    document.querySelector('#mayor').innerHTML = 'Numero Mayor: ' + calcularNumeroMayor($integrantes);
    document.querySelector('#menor').innerHTML = 'Numero Menor: ' + calcularNumeroMenor($integrantes);
    document.querySelector('#promedio').innerHTML = 'Promedio: ' + calcularPromedio($integrantes);

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
         
    
    

