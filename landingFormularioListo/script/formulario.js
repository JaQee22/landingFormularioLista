// javascript para el formulario de contacto
// Autor: Jacqueline Morales

// Funcion para validar el formulario
var personas = [];
// alert("estoy conectado")
var formulario = document.getElementById("formulario");

function validarFormulario(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var FechaNacimiento = document.getElementById("fecha").value;
  var telefono = document.getElementById("telefono").value;
  var codigo = document.getElementById("codigoArea").value;

  if (nombre === "" || apellido === "" || FechaNacimiento === "" || telefono === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }

  if (FechaNacimiento === "") {
    alert("El campo de Fecha de Nacimiento no puede estar vacío");
    return false;
  }


  var codigoRegex = /^\+[0-9]{3}$/;
  if (!codigo.match(codigoRegex)) {
    alert("Por favor, ingrese un codigo de area válido.");
    return;
  }


  var telefonoRegex = /^[0-9]{8}$/;
  if (!telefono.match(telefonoRegex)) {
    alert("Por favor, ingrese un número de teléfono válido de 8 dígitos.");
    return;
  }

  var codigoDescuento = Math.floor(Math.random() * 1000000000).toString().padStart(9, "0");
  window.alert("Su código de descuento es: " + codigoDescuento);
  formulario.style.display = "none";
  

  var persona = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: FechaNacimiento,
      telefono: telefono,
      codigoArea: codigo,
      codigoDescuento: codigoDescuento,
      "nombre completo": function () { return this.nombre + ' ' + this.apellido; },
      "telefono completo": function () { return this.codigoArea + ' ' + this.telefono; }
  };
  personas.push(persona);
  console.log(personas);

  // Mostrar los registros de alumnos en una tabla
  var personasHTML = '<table border="1">\n';
  personasHTML += '<thead>\n';
  personasHTML += '<tr>\n';
  personasHTML += '<th>nombre</th>\n';
  personasHTML += '<th>fechaNacimiento</th>\n';
  personasHTML += '<th>telefono</th>\n';
  personasHTML += '<th>codigoDescuento</th>\n';
  personasHTML += '</tr>\n';
  personasHTML += '</thead>\n';
  personasHTML += '<tbody>\n';
  for (var i = 0; i < personas.length; i++) {
      personasHTML += '<tr>\n';
      personasHTML += '<td>' + personas[i]['nombre completo']() + '</td>\n';
      personasHTML += '<td>' + personas[i]['fechaNacimiento'] + '</td>\n';
      personasHTML += '<td>' + personas[i]['telefono completo']() + '</td>\n';
      personasHTML += '<td>' + personas[i]['codigoDescuento'] + '</td>\n';
      personasHTML += '</tr>\n';
  }
  personasHTML += '</tbody>\n';
  personasHTML += '</table>\n';

  // Limpiar formulario y informar que se ha guardado el alumno
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('fecha').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('codigoArea').value = '';
  // document.getElementById('codigoDescuento').value = '';
  window.alert('Se ha guardado el registro de ' + persona["nombre completo"]());
  document.getElementById('personas').innerHTML = personasHTML;
}

    