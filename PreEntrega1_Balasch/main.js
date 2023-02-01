alert("Bienvenidos a CSS (Canine Style Shop)");
alert("Grandes PrecioX2, Medianos Precio, Chicos PrecioX0.5");
let salir = "quedarse";
let tamanioPerro;
do {
  tamanioPerro = prompt(
    "Por favor Indique el tamaño de su perro. (grande/mediano/chico)"
  );

  switch (tamanioPerro) {
    case "grande":
      let comboGrande = pedirCombo();
      let final1 = 2 * comboGrande;
      salir = prompt(
        "Gracias por su compra, el precio a pagar es $" +
          final1 +
          "( Si desea salir escriba 'salir', de lo contrario puede ingresar cualquier letra para realizar una nueva cotización"
      );
      break;
    case "mediano":
      let comboMediano = pedirCombo();
      salir = prompt(
        "Gracias por su compra, el precio a pagar es $" +
          comboMediano +
          "( Si desea salir escriba 'salir', de lo contrario puede ingresar cualquier letra para realizar una nueva cotización"
      );
      break;
    case "chico":
      let comboChico = pedirCombo();
      let final2 = 0.5 * comboChico;
      salir = prompt(
        "Gracias por su compra, el precio a pagar es $" +
          final2 +
          "( Si desea salir escriba 'salir', de lo contrario puede ingresar cualquier letra para realizar una nueva cotización"
      );
      break;
    default:
      alert("Por favor Ingrese una respuesta correcta");
  }
} while (salir !== "salir");

function pedirCombo() {
  let combo = parseInt(
    prompt(
      "Seleccione el combo: 1. Corte ($500) / 2. Corte + Lavado ($1000) / 3. Corte + Lavado + Juguete ($1500)"
    )
  );
  let precio;
  if (combo === 1) {
    precio = 500;
  } else if (combo === 2) {
    precio = 1000;
  } else if (combo === 3) {
    precio = 1500;
  }
  return precio;
}
