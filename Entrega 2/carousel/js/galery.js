function Foto(nombre, descripcion, imagen, color, letra) {
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.imagen = imagen;
  this.color = color;
  this.letra = letra;
}

const canela = new Foto(
  "Canela",
  "Su momento del día favorito es visitar el parque",
  "../assets/img/perro/galeria1.jpg",
  "amarillo",
  "blanco"
);
const bongo = new Foto(
  "Bongo",
  "Amigable y juguetón con todos los niños",
  "../assets/img/perro/galeria2.jpg",
  "blanco",
  "negro"
);
const kiara = new Foto(
  "Kiara",
  "Le gusta explorar y oler el perfume de las flores",
  "../assets/img/perro/galeria3.jpg",
  "blanco",
  "negro"
);
const emma = new Foto(
  "Emma",
  "Compañera y muy apegada a su familia",
  "../assets/img/perro/galeria4.jpg",
  "celeste",
  "negro"
);
const nala = new Foto(
  "Nala",
  "Amante de dormir en el sillón",
  "../assets/img/perro/galeria5.jpg",
  "rojo",
  "blanco"
);
const sam = new Foto(
  "Sam",
  "Cachorro mañoso y tímido",
  "../assets/img/perro/galeria6.jpg",
  "blanco",
  "negro"
);
const jackYRose = new Foto(
  "Jack y Rose",
  "Hermanos inseparables",
  "../assets/img/perro/galeria7.jpg",
  "blanco",
  "negro"
);
const pancho = new Foto(
  "Pancho",
  "Amoroso, fiel e inteligente",
  "../assets/img/perro/galeria8.jpg",
  "verde",
  "negro"
);

const galery = [canela, bongo, kiara, emma, nala, sam, jackYRose, pancho];
const divContenedor = document.getElementById("galeria");
galery.forEach((Foto) => {
  switch (Foto.letra) {
    case "blanco":
      Foto.letra = "bg-light shadow-sm mx-auto";
      break;
    case "negro":
      Foto.letra = "bg-dark shadow-sm mx-auto";
      break;
  }
});

galery.forEach((Foto) => {
  switch (Foto.color) {
    case "blanco":
      Foto.color =
        "text-bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden";
      break;
    case "amarillo":
      Foto.color =
        "text-bg-warning me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden";
      break;
    case "celeste":
      Foto.color =
        "text-bg-info me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden";
      break;
    case "rojo":
      Foto.color =
        "text-bg-danger me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden";
      break;
    case "verde":
      Foto.color =
        "text-bg-success me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden";
      break;

    default:
      Foto.color =
        "text-bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden";
      break;
  }
});

galery.forEach((Foto) => {
  const card = document.createElement("div");
  card.innerHTML = `<div
  class= "${Foto.color}"
>
  <div class="my-3 py-3">
    <h2 class="display-5">${Foto.nombre}</h2>
    <p class="lead">${Foto.descripcion}</p>
  </div>
  <div
    class="${Foto.letra}"
    style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
  >
    <img
      src="${Foto.imagen}"
      class="d-block w-100"
      alt="Perro"
    />
  </div>
</div>`;
  divContenedor.appendChild(card);
});
