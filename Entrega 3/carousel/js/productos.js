function Duenio(nombre, apellido, edad, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.email = email;
}
function Perro(id, nombre, precio, peso, edad, raza, img, Duenio) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.peso = peso;
  this.edad = edad;
  this.raza = raza;
  this.img = img;
  this.Duenio = Duenio;
  this.cantidad = 1;
}
const ezequiel = new Duenio("Ezequiel", "Balasch", 21, "ezebalasch@gmail.com");
const franco = new Duenio("Franco", "Balasch", 18, "franco.balasch@gmail.com");
const armando = new Duenio(
  "Armando",
  "Balasch",
  50,
  "armando.balasch@gmail.com"
);

const frida = new Perro(
  1,
  "Frida",
  25000,
  23,
  16,
  "Caniche",
  "../../assets/img/perro/peques/frida.jpg",
  [ezequiel, franco, armando]
);
const greta = new Perro(
  2,
  "Greta",
  47500,
  15.5,
  5,
  "Golden Retriever",
  "../../assets/img/perro/peques/greta.jpg",
  [ezequiel, franco]
);
const ema = new Perro(
  3,
  "Ema",
  63900,
  19.5,
  15,
  "Jack Russell",
  "../../assets/img/perro/peques/ema.jpg",
  [franco]
);
const tomy = new Perro(
  4,
  "Tomy",
  3500,
  12.5,
  16,
  "Chihuahua",
  "../../assets/img/perro/peques/tomy.jpg",
  [ezequiel, franco]
);
const luci = new Perro(
  5,
  "Luci",
  16700,
  14,
  9,
  "Bichón Frisé",
  "../../assets/img/perro/peques/luci.jpg",
  [franco]
);
const kobu = new Perro(
  6,
  "Kobu",
  49200,
  12,
  6,
  "Pitbull",
  "../../assets/img/perro/peques/kobu.jpg",
  [ezequiel]
);
const sol = new Perro(
  7,
  "Sol",
  28400,
  11,
  2,
  "Labrador Retriever",
  "../../assets/img/perro/peques/sol.jpg",
  [franco]
);
const capi = new Perro(
  8,
  "Capitan",
  34100,
  17,
  1,
  "Pitbull",
  "../../assets/img/perro/peques/capitan.jpg",
  [armando]
);
const bongo = new Perro(
  9,
  "Bongo",
  65900,
  22,
  12,
  "French Bulldog",
  "../../assets/img/perro/peques/bongo.jpg",
  [franco]
);
// Array con productos
const arrayClientes = [frida, greta, ema, tomy, luci, kobu, sol, capi, bongo];

// Array carrito
let carrito = [];

//Cargar carrito desde el Local storage
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
}

//HTML de Cartas de Productos por cada uno
const divCard = document.getElementById("cardContainer");
arrayClientes.forEach((Perro) => {
  const card = document.createElement("div");

  card.innerHTML = `         
    <div class="card">
   <div class="card-img">
        <img
        src="${Perro.img}"
        class="img-crt"
        alt="Perro"
            />
    </div>
   <div class="card-info">
     <p class="text-title">${Perro.nombre}</p>
     <p class="text-body">${Perro.raza}</p>
   </div>
   <div class="card-footer">
     <span class="text-title">$${Perro.precio}</span>
     <div id="boton${Perro.id}" class="card-button">
       <svg class="svg-icon" viewBox="0 0 20 20">
         <path
           d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"
         ></path>
         <path
           d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"
         ></path>
         <path
           d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"
         ></path>
       </svg>
     </div>
   </div>
</div>
   `;

  divCard.appendChild(card);

  //Agregar productos al carrito con evento click
  const boton = document.getElementById(`boton${Perro.id}`);
  boton.addEventListener("click", () => {
    agregarAlCarrito(Perro.id);
    mostrarNumero();
  });
});

//Funcion agregar al carrito
//Contiene una notificación agregada desde la librería sweet alert
const agregarAlCarrito = (id) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    confirmButtonText: "Ver",
    timer: 800,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: "Agregado al carrito",
  });
  const perroEnCarrito = carrito.find((Perro) => Perro.id === id);
  if (perroEnCarrito) {
    perroEnCarrito.cantidad++;
  } else {
    const Perro = arrayClientes.find((Perro) => Perro.id === id);
    carrito.push(Perro);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//número visible en carrito que se elimina si es cero para mejorar la visibilidad
const numeroCarro = document.getElementById("numeroEnCarro");
const mostrarNumero = () => {
  contadorCarro = carrito.length;
  numeroCarro.innerHTML = "";
  numero = document.createElement("span");
  if (contadorCarro === 0) {
    numero.innerHTML = ``;
  } else {
    numero.innerHTML = `${contadorCarro}`;
  }
  numeroCarro.appendChild(numero);
};
//abrir carrito
const bolsaCarrito = document.getElementById("bolsaCarrito");
bolsaCarrito.addEventListener("click", () => {
  dispararCarro();
});
//función con la tabla de carro
function tablaCarro() {
  let precio = 0;
  let tabla = `
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">Foto</th>
        <th scope="col">Nombre</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody id="bodyTablaCarrito2">`;
  carrito.forEach((Perro) => {
    precio += Perro.precio * Perro.cantidad;
    tabla += `<tr>
    <th scope="row"><img
    src="${Perro.img}"
    class="img-crt"
    alt="Perro"
        /></th>
    <td>${Perro.nombre}</td>
    <td id="cantidad${Perro.id}">${Perro.cantidad}</td>
    <td>$${Perro.precio * Perro.cantidad}</td>
    <td>
    <div class="btn-group">
      <button id="eliminar${
        Perro.id
      }" type="button" class="btn btn-outline-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"></path>
        </svg>
        <span class="visually-hidden">Eliminar</span>
      </button>
      <button id="agregar${
        Perro.id
      }" type="button" class="btn btn-outline-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"></path>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
        </svg>
        <span class="visually-hidden">Agregar</span>
      </button>
      <button id="restar${Perro.id}" type="button" class="btn btn-outline-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"></path>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
        </svg>
        <span class="visually-hidden">Restar</span>
      </button>
    </div>
    </td>
    </tr>`;
  });
  tabla += `</tbody>
  </table>
  <h3>Total: <span id="total"> $${precio}</span></h3>
  `;
  return tabla;
}
function dispararCarro() {
  const tablaCarrito = tablaCarro();
  Swal.fire({
    title: "Carrito de compras",
    html: tablaCarrito,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: "Finalizar compra",
    showDenyButton: true,
    denyButtonText: "Vaciar Carrito",
    width: 800,
    //vaciar el carrito y mostrar swal
    didRender: function () {
      if (carrito !== undefined) {
        let $cancelButton = document.querySelector(".swal2-deny");
        $cancelButton.addEventListener("click", function () {
          // Vaciar el carrito y actualizar la alerta con Sweet Alert
          carrito = [];
          mostrarNumero();
          localStorage.clear();
          Swal.fire({
            icon: "warning",
            title: "Tu carrito está vacío",
            text: "Puedes agregar nuevos productos!",
          });
        });
      }
    },
    //finalizar compra mostrar swal
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Compra realizada con éxito!", "", "success");
    }
  });
  carrito.forEach((Perro) => {
    //Eliminar producto del carrito
    const botonEliminar = document.getElementById(`eliminar${Perro.id}`);
    botonEliminar.addEventListener("click", () => {
      eliminarDelCarrito(Perro.id);
      mostrarNumero();
      calcularTotal(Perro.precio);
    });

    //Sumar cantidad al producto del carrito
    const botonSumar = document.getElementById(`agregar${Perro.id}`);
    botonSumar.addEventListener("click", () => {
      Perro.cantidad++;
      Perro.precio * Perro.cantidad;
      dispararCarro();
      localStorage.setItem("carrito", JSON.stringify(carrito));
      calcularTotal(Perro.precio);
    });
    //Restar cantidad al producto del carrito, si es menor a 1 se elimina el producto del carrito
    const botonRestar = document.getElementById(`restar${Perro.id}`);
    botonRestar.addEventListener("click", () => {
      if (Perro.cantidad == 1) {
        eliminarDelCarrito(Perro.id);
        mostrarNumero();
      } else {
        Perro.cantidad--;
        Perro.precio * Perro.cantidad;
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
      dispararCarro();
      calcularTotal(Perro.precio);
    });
  });
}
//Elimina producto completo del carrito
const eliminarDelCarrito = (id) => {
  const producto = carrito.find((Perro) => Perro.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  dispararCarro();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Mostrar el total de la compra
const calcularTotal = (precio) => {
  const total = document.getElementById("total");
  if (localStorage === undefined || carrito.length === 0) {
    total.innerHTML = ` $0`;
  } else {
    localStorage += precio;

    carrito.forEach((Perro) => {
      totalCompra += Perro.precio * Perro.cantidad;
    });
    total.innerHTML = ` $${precio}`;
  }
};
