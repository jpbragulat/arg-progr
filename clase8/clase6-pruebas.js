function probarValidarCantidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes(0) === 'Debe agregar un numero de integrantes', "validarCantidadIntegrantes() No valido el campo vacio"
    );
    console.assert(
        validarCantidadIntegrantes('w') === 'El campo solo acepta numeros', "validarCantidadIntegrantes() No valido que el campo contenga solo numeros"
    );
    console.assert(
        validarCantidadIntegrantes(12) === 'La cantidad de integrantes no puede ser mayor a 10', "validarCantidadIntegrantes() No valido que se ingrese un numero menor de 10"
    );
    console.assert(
        validarCantidadIntegrantes(5) === '', "validarCantidadIntegranteS() Fallo, se ingreso un valor correcto y fallo"
    )
}

function probarValidarEdadIntegrantes(){
    console.assert(
        validarEdadIntegrantes('') === 'Debe ingresar un valor.', "validarEdadIntegrantes no valido que el campo esta vacio"
    );
    console.assert(
        validarEdadIntegrantes(111) === 'La edad no puede ser mayor a 110.', "validarEdadIntegrantes no valido que la edad no pueda ser mayor a 110 años"
    );
    console.assert(
        validarEdadIntegrantes('abcd') === 'El campo solo acepta numeros', "validarEdadIntegrantes no valido que no se permiten letras"
    );
        
}

probarValidarCantidadIntegrantes();
probarValidarEdadIntegrantes();