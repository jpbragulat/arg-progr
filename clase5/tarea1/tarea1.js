
calcularMensual.onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-usuario').value);
    console.log("Valor Ingresado:", salarioAnual);
    const salarioMensual = salarioAnual / 12;
    console.log("Salario Mensual:", salarioMensual);
    document.querySelector('#salario-mensual').value = salarioMensual;

    return false;
}

