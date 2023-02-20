function Perro(nombre, apellido, duenio, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.duenio = duenio;
  this.edad = edad;
}
const perro1 = new Perro("Pancho", "Con papas", "Juan Carlos", 11);
const perro2 = new Perro("Jamon", "Queso", "Rubén Herrera", 2);
const perro3 = new Perro("Emilia", "Mernes", "Duki", 7);
const perro4 = new Perro("Lio", "Messi", "Jacinto Panes", 13);
const perro5 = new Perro("Pan", "Totado", "Silvio Conti", 1);
const perro6 = new Perro("Pichu", "Buchi", "Juan Manuel", 7);
const perro7 = new Perro("Tostado", "Quemado", "Juan Carlos", 4);
const perro8 = new Perro("Café", "Con leche", "Juan Carlos", 15);

const arrayPerros = [
  perro1,
  perro2,
  perro3,
  perro4,
  perro5,
  perro6,
  perro7,
  perro8,
];
console.log("Perros inscriptos: ");
console.log(arrayPerros);
alert(
  "Bienvenidos a Puppies un local dedicado a la peluquería canina, por el momento se encuentra en desarrollo"
);
let salida = false;

function salir() {
  let preguntar = prompt("¿Desea salir del programa? (S/N)");
  preguntar = preguntar.toUpperCase();
  if (preguntar === "S") {
    salida = true;
  }
}

function altaPerro() {
  let nombre = prompt("Ingrese el nombre del perro");
  let apellido = prompt("Ingrese apellido del perro");
  let duenio = prompt("Ingrese el dueño del perro");
  let edad = parseInt(prompt("Ingrese la edad del perro"));
  let perro = new Perro(nombre, apellido, duenio, edad);
  arrayPerros.push(perro);
  alert(
    "El perro " + perro.nombre + " " + perro.apellido + " fue creado con éxito."
  );
}
function modificarPerro() {
  let nombre = prompt("Ingrese nombre del perro");
  let perro = arrayPerros.find((Perro) => Perro.nombre === nombre);
  let indice = arrayPerros.indexOf(perro);
  let nuevoNombre = prompt("Ingrese nuevo nombre del perro");
  let nuevoApellido = prompt("Ingrese nuevo apellido del perro");
  let duenio = prompt("Ingrese nuevo dueño");
  let edad = parseInt(prompt("Ingrese la edad del perro"));
  let perroModificado = new Perro(nuevoNombre, nuevoApellido, duenio, edad);
  arrayPerros.splice(indice, 1, perroModificado);
  alert("Perro modificado con éxito, verifique array en consola");
}
function bajaPerro() {
  let nombre = prompt("Ingrese nombre del perro");
  let perro = arrayPerros.find((Perro) => Perro.nombre === nombre);
  let indice = arrayPerros.indexOf(perro);
  arrayPerros.splice(indice, 1);
  alert("Perro eliminado con éxito vea array en la última linea de la consola");
  console.log(arrayPerros);
}
function consultarPerro() {
  let nombre = prompt("Ingrese nombre del perro");
  let perro = arrayPerros.find((Perro) => Perro.nombre === nombre);
  alert("Verificar perro en consola");
  console.log(perro);
}

do {
  let decision = parseInt(
    prompt(
      "Ingrese un número: 1_Dar de alta un perro, 2_Modificar perro, 3_Dar de baja un perro, 4_Consultar perros, 5_Salir"
    )
  );
  switch (decision) {
    case 1:
      altaPerro();
      break;

    case 2:
      modificarPerro();
      break;

    case 3:
      bajaPerro();
      break;

    case 4:
      consultarPerro();
      break;

    default:
      break;
  }
  salir();
} while (!salida);
