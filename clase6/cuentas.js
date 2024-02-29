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