function calcularNumeroMayor($integrantes){
    let numeroMayor = $integrantes[0].value;
    for (let i=1; i<$integrantes.length; i++){
        if ($integrantes[i].value > numeroMayor){
            numeroMayor = $integrantes[i].value;
        }
    }
    return numeroMayor;
} 

function calcularNumeroMenor($integrantes){
    let numeroMenor = $integrantes[0].value;
    for (let i=0; i<$integrantes.length; i++){
        if($integrantes[i].value < numeroMenor){
            numeroMenor = $integrantes[i].value;
        }
    }
    return numeroMenor;
}

function calcularPromedio($integrantes){
    let totalSuma=0;
    let promedio=0;
    for(let i=0; i<$integrantes.length; i++){
        totalSuma = Number(totalSuma) + Number($integrantes[i].value);
        console.log("total suma en bucle for: ", totalSuma);
    }
    promedio = totalSuma / $integrantes.length;
    return promedio;
   
    
}