var inputRut = document.getElementById('rut');

inputRut.addEventListener('input', function(event) {
    var valor = inputRut.value;

    if (valor.length > 8) {
        inputRut.value = valor.slice(0, 8);
    }
});

const inputNumRut = document.getElementById('rut');

inputNumRut.addEventListener('input', function() {
    let valor = inputNumRut.value;

    valor = valor.replace(/\D/g, '');

    inputNumRut.value = valor;
});

var inputDv = document.getElementById('dig_v');

inputDv.addEventListener('input', function(event) {
    var valor = inputDv.value;

    valor = valor.replace(/[^0-9kK]/g, '');

    if (valor.length > 1) {
        inputDv.value = valor.slice(0, 1);
    } else {
        inputDv.value = valor; // Actualizar el valor del campo con el valor modificado
    }});

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





var inputFech = document.getElementById('fech');

var inputEdad = document.getElementById('edad');


inputFech.addEventListener('change', function(){

    var Fech = new Date(inputFech.value);

    var fechaActual = new Date();

    var anios = fechaActual - Fech;

    var Edad = Math.floor(anios / (1000 * 60 * 60 * 24 * 365.25));

    inputEdad.value = Edad;
});

$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault(); 

        console.log('El formulario se ha enviado');
        
        var rut = $('#rut').val();

        
        
        if (rut === '')  {
            alert('Debe ingresar su rut');
            return false;

        }

        var rut = $('#rut').val();
        var dv = $('dig_v').val();
        console.log('Valor de rut:', rut.toString().length);
        var rut_dv = rut + "-" + dv
        if (rut_dv.toString().length < 9 || rut.toString().length > 10){
            alert('rut invalido')
            return false;
        }

        var dig_v = $('#dig_v').val();
        
        if (dig_v === '')  {
            alert('Debe ingresar su digito verificador');
            return false;

        }

        var nomb = $('#nomb').val();
        
        if (nomb.trim() == '') {
            alert('Debe ingresar su nombre');
            return false;
        }

        var nomb = $('#nomb').val();

        if (nomb.toString().length < 3 || nomb.toString().length > 20){
            alert('nombre invalido')
            return false;
        }

        var ape_p = $('#ape_p').val();
        
        if (ape_p.trim() == '') {
            alert('Debe ingresar su apellido paterno');
            return false;
        }

        var ape_p = $('#ape_p').val();
        
        if (ape_p.toString().length < 3 || ape_p.toString().length > 20){
            alert('apellido paterno invalido')
            return false;
        }


        var ape_m = $('#ape_m').val();
        
        if (ape_m.trim() == '') {
            alert('Debe ingresar apellido materno');
            return false;
        }

        var ape_m = $('#ape_m').val();

        if (ape_m.toString().length < 3 || ape_m.toString().length > 20){
            alert('apellido materno invalido')
            return false;
        }

        var fech = $('#fech').val();

        if (!fech){
            alert('Ingrese fecha')
            return false;
        }

        var edad = $('#edad').val();
        
        if (edad.trim() == '') {
            alert('Debe ingresar su fecha de nacimiento');
            return false;
        }

        var edad = $('#edad').val();

        if (edad <18 || edad >35 ){
            alert('Deber tener entre 18 y 35 años');
            return false;
        }

        var num_c = $('#num_c').val();
        
        if (num_c.trim() == '') {
            alert('Debe ingresar su numero celular');
            return;
        }
        
        var genero = $('#genero').val();
        
        if (genero.trim() == '') {
            alert('Debe de seleccionar un genero');
            return;
        }
        this.submit();

    });
});

function generarCarta(){       
        var rut = document.getElementById("rut").value;
        var dv = document.getElementById("dig_v").value;
        var nomb = document.getElementById("nomb").value;
        var ape_p = document.getElementById("ape_p").value;
        var ape_m = document.getElementById("ape_m").value;
        var fecha_nac = document.getElementById("fech").value;
        var genero = document.getElementById("genero").value;
        var celular = document.getElementById("num_c").value;
    
        var carta = "Carta de postulacíon a Chile Limpio para la tarea de apoyo en la isla de Chiloé:\n\n" +
                    "RUT: " + rut + "-" + dv +     "\n" +
                    "Nombre: " + nomb + "\n" +
                    "Apellido Paterno: " + ape_p + "\n" +
                    "Apellido Materno: " + ape_m + "\n" +
                    "Fecha de Nacimiento: " + fecha_nac + "\n" +
                    "Género: " + genero + "\n" +
                    "Celular: " + celular;
    
        document.getElementById("Carta").value = carta;
    
    

};