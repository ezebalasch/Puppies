// Botón de registro index
const registro = document.getElementById("registro");
registro.addEventListener("click", () => {
  //AGREGAR SWEET ALERT CON USUARIO Y CONTRASEÑA
  alertaRegistro();
});

async function alertaRegistro() {
  const { value: formValues } = await Swal.fire({
    title: "Formulario de registro",
    html: `      <input type="text" id="swal-input1" class="swal2-input" placeholder="Nombre" />
    <input type="text" id="swal-input2" class="swal2-input" placeholder="Apellido"/>
    <input type="number" id="swal-input3" class="swal2-input" placeholder="Edad"/>
    <input type="text" id="swal-input4" class="swal2-input" placeholder="Usuario"/>
    <input type="password" id="swal-input5" class="swal2-input" placeholder="Contraseña"/>


`,
    focusConfirm: false,

    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").value,
        document.getElementById("swal-input4").value,
        document.getElementById("swal-input5").value,
      ];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(`Usuario: ${formValues}`));
  }
}
