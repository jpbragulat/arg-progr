/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//const cantidadIntegrantesFamilia = Number(prompt('Ingrese cantidad de integrantes de su familia: '));
//console.log(cantidadIntegrantesFamilia);

//agregarIntegrantes(cantidadIntegrantesFamilia);

agregar.onclick = function() {
    const cantidadIntegrantesFamilia = Number(prompt('Ingrese cantidad de integrantes de su familia: '));
    agregarIntegrantes(cantidadIntegrantesFamilia);
}


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

function calcularNumeroMayor($integrantes){
    let numeroMayor = $integrantes[0].value;
    for (i=0; i<$integrantes.length; i++){
        if ($integrantes[i].value > numeroMayor){
            numeroMayor = $integrantes[i].value;
        }
    }
    console.log("Mayor:", numeroMayor);   
    document.querySelector('#mayor').innerHTML = 'Numero Mayor: ' + numeroMayor;

} 

function calcularNumeroMenor($integrantes){
    let numeroMenor = $integrantes[0].value;
    let i;
    for (i=0; i<$integrantes.length; i++){
        if($integrantes[i].value < numeroMenor){
            numeroMenor = $integrantes[i].value;
        }
    }
    console.log("Menor:", numeroMenor);
    document.querySelector('#menor').innerHTML = 'Numero Menor: ' + numeroMenor;
}

function calcularPromedio($integrantes){
    let totalSuma=0;
    let promedio=0;
    for(let i=0; i<$integrantes.length; i++){
        totalSuma = Number(totalSuma) + Number($integrantes[i].value);
        console.log("total suma en bucle for: ", totalSuma);
    }
    console.log("total suma: ",totalSuma);
    promedio = totalSuma / $integrantes.length;
    console.log("Promedio: ",promedio);
    document.querySelector('#promedio').innerHTML = 'Promedio: ' + promedio;
}

calcular.onclick = function() {
    const $integrantes = document.querySelectorAll('.integrante-familiar input');
    console.log("NodeList: ", $integrantes);
    for(i=0; i<$integrantes.length; i++){
        console.log($integrantes[i].value);
    }
    calcularPromedio($integrantes);
    calcularNumeroMayor($integrantes);
    calcularNumeroMenor($integrantes);

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
    