
let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let esValido = true;

    // Validación de la fecha
    let valorFecha = new Date(document.getElementById('fecha').value);
    let fechaHoy = new Date();
    let formatFecha = valorFecha.getDate() + "/" + (valorFecha.getMonth() + 1) + "/" + valorFecha.getFullYear();


    if (isNaN(valorFecha)) {
        document.getElementById('errorFecha').textContent = 'El campo de fecha no puede estar vacío';
        esValido = false;
    } else if (valorFecha > fechaHoy) {
        document.getElementById('errorFecha').textContent = 'Formato de fecha inválido.';
        esValido = false;
    } else {
        document.getElementById('errorFecha').textContent = '';
    }

    // Validación del cocinero
    let cocinero = document.getElementById('cocinero').value;
    let regexCocinero = /^[A-Z]{2}\$\d{4}$/;
    if (!cocinero) {
        document.getElementById('errorCocinero').textContent = 'El campo de cocinero no puede estar vacío';
        esValido = false;
    } else if (!regexCocinero.test(cocinero)) {
        document.getElementById('errorCocinero').textContent = 'Formato de cocinero inválido. Ejemplo: WW$1234';
        esValido = false;
    } else {
        document.getElementById('errorCocinero').textContent = '';
    }

    // Validación del destinatario
    let destinatario = document.getElementById('destinatario').value;
    let regexDestinatario = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;
    if (!destinatario) {
        document.getElementById('errorDestinatario').textContent = 'El campo de destinatario no puede estar vacío';
        esValido = false;
    } else if (!regexDestinatario.test(destinatario)) {
        document.getElementById('errorDestinatario').textContent = 'Formato de destinatario inválido. Ejemplo: NM_alburquerque:1234';
        esValido = false;
    } else {
        document.getElementById('errorDestinatario').textContent = '';
    }

    // Validación de gramos
    let gramos = document.getElementById('gramos').value;
    if (!gramos) {
        document.getElementById('errorGramos').textContent = 'El campo de gramos no puede estar vacío';
        esValido = false;
    } else if (gramos < 100 || gramos > 5000) {
        document.getElementById('errorGramos').textContent = 'El valor debe estar entre 100 y 5000 gramos';
        esValido = false;
    } else {
        document.getElementById('errorGramos').textContent = '';
    }

    // Validación de la composición
    let composicion = document.getElementById('composicion').value;
    let regexComposicion = /^\d+g([A-Za-z]{1,2}\d?){2}$/;
    if (!composicion) {
        document.getElementById('errorComposicion').textContent = 'El campo de composición no puede estar vacío';
        esValido = false;
    } else if (!regexComposicion.test(composicion)) {
        document.getElementById('errorComposicion').textContent = 'Formato de composición inválido. Ejemplo: 200gC3OH7';
        esValido = false;
    } else {
        document.getElementById('errorComposicion').textContent = '';
    }

    // Validación del número de cuenta
    let cuenta = document.getElementById('cuenta').value;
    let regexCuenta = /^[A-Z]{2}\d{2}-\d{12}-\d{4}$/;
    if (!cuenta) {
        document.getElementById('errorCuenta').textContent = 'El campo de cuenta no puede estar vacío';
        esValido = false;
    } else if (!regexCuenta.test(cuenta)) {
        document.getElementById('errorCuenta').textContent = 'Formato de cuenta inválido. Ejemplo: AB12-123456789012-3456';
        esValido = false;
    } else {
        document.getElementById('errorCuenta').textContent = '';
        // Eliminar los guiones para el campo "cuentaSinGuiones"
        let cuentaSinGuiones = cuenta.replace(/-/g, '');
        document.getElementById('cuentaSinGuiones').value = cuentaSinGuiones;
    }

    if (esValido) {
        alert('Formulario válido');
       
    }


});

