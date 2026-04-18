function abrirModal(srcDaImagem) {
  const modal = document.getElementById("meuModal");
  const imgAmpliada = document.getElementById("imagemAmpliada");
  const linkDownload = document.getElementById("linkDownload");

  modal.style.display = "flex";
  
  imgAmpliada.src = srcDaImagem;
  linkDownload.href = srcDaImagem;
}

function fecharModal() {
  document.getElementById("meuModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("meuModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}