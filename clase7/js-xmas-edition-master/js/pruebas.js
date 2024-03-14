//const $form = document.querySelector("#carta-a-santa");

function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo nombre no puede estar vacio.',
      "Validar nombre no validó que el nombre no sea vacío"
    );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  console.assert(
    validarNombre('Julio') === '', "validarNombre() fallo con nombre que esta OK"
  );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('Buenos Aires') === '', 'Debe elegir una ciudad.'  
    );
    console.assert(
        validarCiudad('') === 'Debe elegir una ciudad.', 'validarCiudad fallo, el campo estaba vacio y no dio alerta'
    );

}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion no puede estar vacio', "validarDescripcionRegalo no valido el campo en vacio"
    );
    console.assert(
        validarDescripcionRegalo('asdadasdasdasdajsdjadsjasdjadjasdjasjdasdjasdjasdasjdadjasdjasdasjdasdjasdasjddaqj') === 'El campo descripcion no puede ser tan largo',
        "validarDescripcionRegalo no valido que el campo no puede ser tan largo."
    );
    console.assert(
        validarDescripcionRegalo('regalos para pedir a santa') === '', 'la funcion descripcion no funciono cuando el valor estaba OK'
        );
}

probarValidarDescripcionRegalo();
probarValidarNombre();
probarValidarCiudad();
