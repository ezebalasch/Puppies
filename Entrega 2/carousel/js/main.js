function Duenio(nombre, apellido, edad, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.email = email;
}
function Perro(nombre, precio, peso, edad, raza, img, Duenio) {
  this.nombre = nombre;
  this.precio = precio;
  this.peso = peso;
  this.edad = edad;
  this.raza = raza;
  this.img = img;
  this.Duenio = Duenio;
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
  "Frida",
  25000,
  23,
  16,
  "Caniche",
  "../../assets/img/perro/peques/frida.jpg",
  [ezequiel, franco, armando]
);
const greta = new Perro(
  "Greta",
  47500,
  15.5,
  5,
  "Golden Retriever",
  "../../assets/img/perro/peques/greta.jpg",
  [ezequiel, franco]
);
const ema = new Perro(
  "Ema",
  63900,
  19.5,
  15,
  "Jack Russell",
  "../../assets/img/perro/peques/ema.jpg",
  [franco]
);
const tomy = new Perro(
  "Tomy",
  3500,
  12.5,
  16,
  "Chihuahua",
  "../../assets/img/perro/peques/tomy.jpg",
  [ezequiel, franco]
);
const luci = new Perro(
  "Luci",
  16700,
  14,
  9,
  "Bichón Frisé",
  "../../assets/img/perro/peques/luci.jpg",
  [franco]
);
const kobu = new Perro(
  "Kobu",
  49200,
  12,
  6,
  "Pitbull",
  "../../assets/img/perro/peques/kobu.jpg",
  [ezequiel]
);
const sol = new Perro(
  "Sol",
  28400,
  11,
  2,
  "Labrador Retriever",
  "../../assets/img/perro/peques/sol.jpg",
  [franco]
);
const capi = new Perro(
  "Capitan",
  34100,
  17,
  1,
  "Pitbull",
  "../../assets/img/perro/peques/capitan.jpg",
  [armando]
);
const bongo = new Perro(
  "Bongo",
  65900,
  22,
  12,
  "French Bulldog",
  "../../assets/img/perro/peques/bongo.jpg",
  [franco]
);

const arrayClientes = [frida, greta, ema, tomy, luci, kobu, sol, capi, bongo];
console.log(arrayClientes);
const buscar = arrayClientes.find((Perro) => Perro.nombre === "Frida");
console.log(buscar);

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
     <div class="card-button">
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
});
