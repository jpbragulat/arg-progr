
calcular.onclick = function(){
    let $horasTotales = document.querySelectorAll(".horas");
    let $minutosTotales = document.querySelectorAll(".minutos");
    let $segundosTotales = document.querySelectorAll(".segundos");
    let sumaHorasTotales = 0;
    let sumaMinutosTotales = 0;
    let sumaSegundosTotales = 0;

    function sumarTotal(sumaHorasTotales, sumaMinutosTotales, sumaSegundosTotales){

        for (let i=0; i<$horasTotales.length; i++){
            
            sumaHorasTotales = sumaHorasTotales + (Number($horasTotales[i].value));
            sumaMinutosTotales = sumaMinutosTotales + (Number($minutosTotales[i].value));
            sumaSegundosTotales = sumaSegundosTotales + (Number($segundosTotales[i].value));
            
        }
            
        document.querySelector("#tiempo-total").innerHTML = `La suma de tiempo total de los videos es: ${sumaHorasTotales} Hs, ${sumaMinutosTotales} Min, ${sumaSegundosTotales} Seg`;
    }
        

    sumarTotal(sumaHorasTotales, sumaMinutosTotales, sumaSegundosTotales);

    return false;


}
