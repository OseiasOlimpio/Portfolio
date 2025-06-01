// menu responsivo
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "img/close_white_36dp.svg";
  }
}

// dados do formulario
function enviaFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const projeto = document.getElementById("projeto").value;

  const mensagem = `Olá, me chamo Nome: ${nome} \n E-mail: ${email} \n Telefone para contato: ${telefone} \n Entrei em contato para solicitar o orçamento do seguinte projeto: ${projeto}.`;

  const numeroWhatsApp = "87991097719";

  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
    mensagem
  )}`;
  window.open(urlWhatsapp, "_blank");

  document.getElementById("formContato").addEventListener("submit", enviaFormulario);
}