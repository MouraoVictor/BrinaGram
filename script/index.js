// 1. Lista de fotos
const fotos = [
    "argentina.jpg",
    "brazillian-cowgirl.jpg",
    "arresting.jpg",
    "brinas-pit-stop.jpg",
    "coachella-body-black-2.jpg",
    "coachella-body-black.jpg",
    "coachella-car.jpg",
    "happy-easter.jpg",
    "clip-house-tour.jpg",
    "coachella-chair.jpg",
    "peaky-blinder.jpg",
    "wallpaper-short-n-sweet-2.jpg",
    "wallpaper-short-n-sweet.jpg",
    "met-gala1.jpg",
    "met-gala2.jpg",
    "before_met-gala1.jpg",
    "before_met-gala2.jpg",
    "before_met-gala3.jpg",
    "before_met-gala4.jpg",
    "camisa-flamengo-maracana.png",
    "camisa-flamengo-maracana-leonardoai.jpg",
    "camisa-flamengo-maracana-rio-de-janeiro.jpg",
    "sabrina_camisa_ferrari.png",
];

// 2. Função para carregar a galeria
function carregarGaleria() {
    const container = document.getElementById('galeria-fotos');
    if (!container) return; // Segurança caso o ID mude

    const caminhoBase = "./assets/photos/";

    const htmlFotos = fotos.map(foto => {
        return `<img 
                    src="${caminhoBase}${foto}" 
                    alt="Photo" 
                    class="foto-miniatura" 
                    onclick="abrirModal(this.src)">`;
    }).join('');

    container.innerHTML = htmlFotos;
}

// 3. Funções do Modal
function abrirModal(src) {
    const modal = document.getElementById("meuModal");
    const imagemAmpliada = document.getElementById("imagemAmpliada");
    const linkDownload = document.getElementById("linkDownload");

    // Prepara a imagem e os links
    imagemAmpliada.src = src;
    linkDownload.href = src;

    // Remove a classe fechando caso tenha ficado, e adiciona a de abrir
    modal.classList.remove("fechando");
    modal.classList.add("abrindo");

    // Mostra o modal
    modal.style.display = "flex";

    // Reseta a opacidade dos botões (que podem ter sumido na última vez que fechou)
    document.querySelector('.fechar').style.opacity = '1';
    document.querySelector('.controles-modal').style.opacity = '1';
}

function fecharModal() {
    const modal = document.getElementById("meuModal");

    // Troca a classe para acionar a animação de saída no CSS
    modal.classList.remove("abrindo");
    modal.classList.add("fechando");

    // Espera os exatos 300ms da animação (0.3s definidos no CSS) antes de sumir com o modal
    setTimeout(() => {
        modal.style.display = "none";
        // Limpa a classe de saída para não bugar a próxima abertura
        modal.classList.remove("fechando");
    }, 300);
}

// Fechar ao clicar fora da imagem
window.onclick = function (event) {
    const modal = document.getElementById("meuModal");
    // Verifica se clicou diretamente no fundo escuro (modal) e não nos botões/imagem
    if (event.target === modal) {
        fecharModal();
    }
}

// Iniciar
window.onload = carregarGaleria;