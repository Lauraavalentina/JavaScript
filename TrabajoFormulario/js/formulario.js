function Registro() {
  let edad = document.getElementById("edad").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("email").value;

  edad = parseInt(edad);

  if (edad == "" || nombre == "" || apellido == "" || correo == "") {
    alert(`Por favor ingrese todos los campos`);
    limpiar();
  } else {
    if (edad >= 18) {
      alert(
        `Hola ${nombre} ${apellido} has aplicado correctamente te contactaremos en ${correo}`
      );
      limpiar();
    } else {
      if (edad <= 18) {
        alert(`Hola  ${nombre} ${apellido} no cumples con la edad requerida`);
        limpiar();
      }
    }
  }
}

function limpiar() {
  document.getElementById("edad").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
}
