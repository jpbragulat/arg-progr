function calcularNumeroMayor(numeros){
    let numeroMayor = numeros[0];
    for (let i=1; i<numeros.length; i++){
        if (numeros[i] > numeroMayor){
            numeroMayor = numeros[i];
        }
    }
    console.log(numeros[0].value);
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
    let promedio=0;
    for(let i=0; i<numeros.length; i++){
        totalSuma = Number(totalSuma) + Number(numeros[i]);
    }
    promedio = totalSuma / numeros.length;
    return promedio;
   
    
}