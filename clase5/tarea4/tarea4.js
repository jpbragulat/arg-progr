
const lista = document.querySelectorAll("li");
const arrayNumeros = []; 


function construirArray(){
    let i;
    for (i=0; i<lista.length; i++){
        arrayNumeros[i] = Number(lista[i].textContent);
        console.log(arrayNumeros[i]);
    }
}

function calcularNumeroMayor (){
    let numeroMayor = arrayNumeros[0];
    let i;
    for (i=0; i<lista.length; i++){
        if (arrayNumeros[i] > numeroMayor){
            numeroMayor = arrayNumeros[i];
        }
    }
    console.log("Mayor:", numeroMayor);   
    document.querySelector('#mayor').innerHTML = 'Numero Mayor: ' + numeroMayor;
}
        
function calcularNumeroMenor(){
    let numeroMenor = arrayNumeros[0];
    let i;
    for (i=0; i<lista.length; i++){
        if(arrayNumeros[i] < numeroMenor){
            numeroMenor = arrayNumeros[i];
        }
    }
    console.log("Menor:", numeroMenor);
    document.querySelector('#menor').innerHTML = 'Numero Menor: ' + numeroMenor;
}

function calcularPromedio(){
    let totalSuma = 0;
    let promedio = 0;
    let i;
    for(i=0; i<lista.length; i++){
        totalSuma = totalSuma + arrayNumeros[i];
    }
    promedio = totalSuma / Number(lista.length);
    console.log("Promedio: ",promedio);
    document.querySelector('#promedio').innerHTML = 'Promedio: ' + promedio;
}

function calcularMasFrecuente(){
    let numeroMasFrecuente = 0;
    let maxRepeticiones = 0;
    let i;
    
    for(i=0; i<lista.length; i++){
        let j;
        let repeticiones = 0;

        for(j=0; j<lista.length; j++){
            if (arrayNumeros[i] === arrayNumeros[j] && i!=j){
                repeticiones++;
            } 
        }
        if (repeticiones > maxRepeticiones){
            maxRepeticiones = repeticiones;
            numeroMasFrecuente = arrayNumeros[i];
        }       
    }
    console.log("Frecuente: ",numeroMasFrecuente);
    document.querySelector('#frecuente').innerHTML = 'Numero mas Frecuente: ' + numeroMasFrecuente;
}
    

construirArray();
calcularNumeroMayor();
calcularNumeroMenor();
calcularPromedio();
calcularMasFrecuente();

