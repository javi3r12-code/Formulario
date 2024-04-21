function validarFormulario() {
    
        // Aquí debes realizar las validaciones de los campos del formulario
        // Por ejemplo:
        var rut = document.getElementById('rut').value;
        var nombre = document.getElementById('nomb').value;
        // Continúa con los demás campos y sus validaciones
    
        // Ejemplo de validación del campo rut:
        if (!validarRut(rut)) {
            alert("El RUT ingresado no es válido.");
            return;
        }
    
        // Continúa con las demás validaciones
    
        // Si todas las validaciones son exitosas, puedes enviar el formulario
        document.querySelector('form').submit();
        
}


var inputRut = document.getElementById('rut');

inputRut.addEventListener('input', function(event) {
    var valor = inputRut.value;

    if (valor.length > 10) {
        inputRut.value = valor.slice(0, 10);
    }
});

var inputEdad = document.getElementById('edad');

inputEdad.addEventListener('input', function(event) {
    var valor = inputEdad.value;

    if (valor.length > 3) {
        inputEdad.value = valor.slice(0, 3);
    }
});

var inputNum = document.getElementById('num_c');

inputNum.addEventListener('input', function(event) {
    
    var valor = inputNum.value;

    if (valor.length > 9) {
        inputNum.value = valor.slice(0, 9);
    }
});


const inputNumRut = document.getElementById('rut');

inputNumRut.addEventListener('input', function() {
    let valor = inputNumRut.value;

    valor = valor.replace(/[^0-9-]/, '');

    inputNumRut.value = valor;
});


var inputFech = document.getElementById('fech');

var inputEdad = document.getElementById('edad');


inputFech.addEventListener('change', function(){

    var Fech = new Date(inputFech.value);

    var fechaActual = new Date();

    var anios = fechaActual - Fech;

    var Edad = Math.floor(anios / (1000 * 60 * 60 * 24 * 365.25));

    inputEdad.value = Edad;
})

$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault(); 

        console.log('El formulario se ha enviado');
        
        var rut = $('#rut').val();

        console.log('Valor de rut:', rut);
        
        if (rut === '') {
            alert('Debe ingresar su RUT');
            return false;
        }

        var nomb = $('#nomb').val();
        
        if (nomb.trim() == '') {
            alert('Debe ingresar su nombre');
            return;
        }

        var ape_p = $('#ape_p').val();
        
        if (ape_p.trim() == '') {
            alert('Debe ingresar su apellido paterno');
            return;
        }

        var ape_m = $('#ape_m').val();
        
        if (ape_m.trim() == '') {
            alert('Debe ingresar apellido materno');
            return;
        }

        var edad = $('#edad').val();
        
        if (edad.trim() == '') {
            alert('Debe ingresar su fecha de nacimiento');
            return;
        }

        var num_c = $('#num_c').val();
        
        if (num_c.trim() == '') {
            alert('Debe ingresar su numero celular');
            return;
        }

        this.submit();
    });
});