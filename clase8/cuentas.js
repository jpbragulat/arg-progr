function calcularNumeroMayor(numeros){
    let numeroMayor = numeros[0];
    for (let i=1; i<numeros.length; i++){
        if (numeros[i] > numeroMayor){
            numeroMayor = numeros[i];
        }
    }
    return numeroMayor;
} 

function calcularNumeroMenor(numeros){
    let numeroMenor = numeros[0];
    for (let i=0; i<numeros.length; i++){
        if(numeros[i] < numeroMenor){
            numeroMenor = numeros[i];
        }
    }
    return numeroMenor;
}

function calcularPromedio(numeros){
    let totalSuma=0;
    for(let i=0; i<numeros.length; i++){
        totalSuma = Number(totalSuma) + Number(numeros[i]);
    }
    return totalSuma / numeros.length;
}
   
    