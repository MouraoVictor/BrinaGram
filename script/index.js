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
    "brasil-agua-de-coco.jpg",
    "going-upstairs-1.jpg",
    "going-upstairs-2.jpg",
    "going-upstairs-3.jpg",
    "met-gala-dress-close.jpg",
    "met-gala-front.jpg",
    "met-gala-looking-down.jpg",
    "met-gala-looking-right.jpg",
    "met-gala-side-2.jpg",
    "met-gala-side.jpg",
    "brina_&_madonna-1.jpg",
    "brina_&_madonna-2.jpg",
    "camiseta_brasil.jpg",
    "deitada_p&b.jpg",
    "ferrari_wpp_celular.jpg",
    "fla_debochada.jpg",
    "fundo SC black edition.jpg",
    "fundo_yt_music.jpg",
    "mans_best_friend_alt.jpg",
    "terno_no_carro.jpg",
    "toalha_flamengo.jpg",
    "vestido_dourado.jpg",
    "xoxo.jpg",
];

// 2. Função para carregar a galeria
function carregarGaleria() {
    const container = document.getElementById('galeria-fotos');
    if (!container) return; // Segurança caso o ID mude

    const caminhoThumbnails = "./assets/thumbnails/"; // <-- Caminho das fotos LEVES

    const htmlFotos = fotos.map(foto => {
        // Agora passamos o NOME do arquivo ('${foto}') para a função, em vez do caminho inteiro
        return `<img 
                    src="${caminhoThumbnails}${foto}" 
                    alt="Foto da Brina" 
                    class="foto-miniatura" 
                    loading="lazy" 
                    decoding="async"
                    onclick="abrirModal('${foto}')">`;
    }).join('');

    container.innerHTML = htmlFotos;
}

// 3. Funções do Modal
function abrirModal(nomeArquivo) {
    const modal = document.getElementById("meuModal");
    const imagemAmpliada = document.getElementById("imagemAmpliada");
    const linkDownload = document.getElementById("linkDownload");

    const caminhoAltaRes = "./assets/photos/"; // <-- Caminho das fotos PESADAS

    // Monta o link da imagem original juntando a pasta de alta resolução com o nome do arquivo
    const linkFotoOriginal = caminhoAltaRes + nomeArquivo;

    // Coloca uma imagem de "carregando" temporária para evitar mostrar a foto anterior enquanto baixa a nova
    imagemAmpliada.src = "";

    // Prepara a imagem e os links com a foto em alta qualidade
    imagemAmpliada.src = linkFotoOriginal;
    linkDownload.href = linkFotoOriginal;

    // Remove a classe fechando caso tenha ficado, e adiciona a de abrir
    modal.classList.remove("fechando");
    modal.classList.add("abrindo");

    // Mostra o modal
    modal.style.display = "flex";

    // Reseta a opacidade dos botões
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