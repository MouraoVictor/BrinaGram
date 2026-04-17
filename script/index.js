function abrirModal(srcDaImagem) {
  const modal = document.getElementById("meuModal");
  const imgAmpliada = document.getElementById("imagemAmpliada");
  const linkDownload = document.getElementById("linkDownload");

  // Usamos flex no lugar de block para centralizar tudo perfeitamente
  modal.style.display = "flex";
  
  imgAmpliada.src = srcDaImagem;
  linkDownload.href = srcDaImagem;
}

function fecharModal() {
  document.getElementById("meuModal").style.display = "none";
}

// Bônus: Fechar o modal ao clicar fora da imagem (no fundo escuro)
window.onclick = function(event) {
  const modal = document.getElementById("meuModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}