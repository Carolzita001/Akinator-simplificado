// Classes da Árvore de Decisão
class No {
    constructor(valor, esquerda = null, direita = null) {
        this.valor = valor;
        this.esquerda = esquerda;
        this.direita = direita;
    }
}

class NoFolha extends No {
    constructor(valor, imagem) {
        super(valor);
        this.imagem = imagem;
    }
}

// Objetos das folhas
//const noCapa = new NoFolha("Leve capa de chuva!", "capa.jpg");
//const noGuardaChuva = new NoFolha("Leve guarda-chuva!", "guardaChuva.jpg");
//const noSol = new NoFolha("Vai curtir o dia ao ar livre!", "sol.jpg");

const drEstranho        = new NoFolha("Eu sei que você está pensando no Dr. Estranho!",  "images/gifs/DoctorStranger.gif");
const thor              = new NoFolha("Eu suponho que esteja pensando no Thor!",                   "images/gifs/Thor.gif");
const hulk              = new NoFolha("Eu acredito que esteja falando do Hulk!",                   "images/gifs/Hulk.gif");
const homemAranha       = new NoFolha("É no Homem Aranha que você está pensando!",            "images/gifs/SpiderMan.gif");
const capitaMarvel      = new NoFolha("É a Capitã Marvel!",                               "images/gifs/CaptainMarvel.gif");
const panteraNegra      = new NoFolha("Eu estou certo que seja o Pantera Negra!",           "images/gifs/BlackPanter.gif");
const homemFerro        = new NoFolha("Só pode ser o Homem de Ferro!",                          "images/gifs/IronMan.gif");
const capitaoAmerica    = new NoFolha("Com certeza é o Capitão Ameria!",                 "images/gifs/CaptainAmerica.gif");
const gaviaoArqueiro    = new NoFolha("É o Gavião Arqueiro!",                                   "images/gifs/Hawkeye.gif");
const viuvaNegra        = new NoFolha("Eu sei que você está pensando na Viúva Negra!",      "images/gifs/Black Widow.gif");
const superman          = new NoFolha("Eu suponho que esteja pensando no Superman!",           "images/gifs/Superman.gif");
const supergirl         = new NoFolha("Eu acredito que esteja falando da Supergirl!",         "images/gifs/Supergirl.gif");
const lanternaVerde     = new NoFolha("É no Lanterna Verde que você está pensando!",       "images/gifs/GreenLantern.gif");
const mulherMaravilha   = new NoFolha("É na Mulher Maravilha que você está pensando!",      "images/gifs/WonderWoman.gif");
const shazam            = new NoFolha("Eu estou certo que seja o Shazam!",                       "images/gifs/Shazam.gif");
const superChoque       = new NoFolha("Só pode ser o Super-Choque!",                        "images/gifs/StaticShock.gif");
const batman            = new NoFolha("Com certeza é o Batman!",                                 "images/gifs/Batman.gif");
const flash             = new NoFolha("É o Flash!",                                            "images/gifs/TheFlash.gif");
const arqueiroVerde     = new NoFolha("Eu tenho certeza que seja o Arqueiro Verde!",              "images/gifs/Arrow.gif");
const cyborg            = new NoFolha("Só pode ser o Cyborg!",                                   "images/gifs/Cyborg.gif");

// Objetos dos nós intermediários
//const noVento = new No("O vento está muito forte?", noCapa, noGuardaChuva);

//Nível folha
const estudaMagia            = new No("Estudou magia?",                                                           drEstranho, thor);
const transFisica            = new No("Sofre uma Transformação física ao ativar o poder?",                       hulk, homemAranha);
const armaduraVibranium      = new No("Sua armadura é feita de vibranium?",                               panteraNegra, homemFerro);
const lutaArcoFlecha         = new No("Usa arco e flecha?",                                             gaviaoArqueiro, viuvaNegra);
const sexoMasculino          = new No("O herói é masculino?",                                                  superman, supergirl);
const origemMitologia        = new No("O herói tem origem nas amazonas?",                                  mulherMaravilha, shazam);
const manipulaEletricidade   = new No ("O heroi manipula eletricidade?",                                       superChoque, batman);
const usaFlecha              = new No ("Usa arco e flecha?",                                                 arqueiroVerde, cyborg);

//Nivel 3
const exposicaoRadiacao      = new No("O poder surgiu de exposição a radiação ou uma picada radioativa?", transFisica, capitaMarvel);
const armaduratecnologica    = new No("Possui armadura?",                                         armaduraVibranium, capitaoAmerica);
const anelEnergetico         = new No("O poder do herói vem de um anel cosmico?",                    lanternaVerde, origemMitologia);
const velocista              = new No("O heroi é um velocista?",                                                   flash, usaFlecha);

//Nivel 2
const poderMagicoMitologico  = new No("O poder é magico ou mitológico?",                             estudaMagia, exposicaoRadiacao);
const armaduraSoro           = new No("Usa armadura ou escudo?",                                armaduratecnologica, lutaArcoFlecha);
const nasceuPlaneta          = new No("O herói nasceu em outro planeta?",                             sexoMasculino, anelEnergetico);
const capaClassica           = new No("O herói usa capa ou sobretudo?",                             manipulaEletricidade, velocista);

//Nivel 1
const ehSobreHumano          = new No("O poder de herói e sobre-humano?",                       poderMagicoMitologico, armaduraSoro);
const ehPlanetaDivindades    = new No("O herói é de outro planeta ou tem poderes divinos?",             nasceuPlaneta, capaClassica);

// Raiz da Árvore
const raiz                   = new No("O personagem é um herói da marvel?",                      ehSobreHumano, ehPlanetaDivindades);



let noAtual = null;

let caixaTexto, elTexto, elImg, btnIniciar, btnSim, btnNao, btnReiniciar;

// Garante o carregamento dos elementos antes de executar a lógica
document.addEventListener("DOMContentLoaded", () => {
    elTexto = document.getElementById("texto-exibido");
    elImg = document.getElementById("genio-img");
    btnIniciar = document.getElementById("btn-iniciar");
    btnSim = document.getElementById("btn-sim");
    btnNao = document.getElementById("btn-nao");
    btnReiniciar = document.getElementById("btn-reiniciar");

    // Atribuição dos eventos de clique
    btnIniciar.addEventListener("click", iniciarJogo);
    btnSim.addEventListener("click", () => responder("sim"));
    btnNao.addEventListener("click", () => responder("nao"));
    btnReiniciar.addEventListener("click", reiniciarJogo);

    // Define a tela inicial assim que carrega
    exibirTelaInicial();
});

function exibirTelaInicial() {
    noAtual = null;
    //elTexto.textContent = "Clique no botão abaixo para iniciar!";
    caixaTexto = document.getElementById("pergunta-box");
    caixaTexto.style.display = "none";
    elImg.src = "images/genius/img1.png";

    elImg.classList.remove("imagem-folha");

    btnIniciar.style.display = "inline-block";
    btnSim.style.display = "none";
    btnNao.style.display = "none";
    btnReiniciar.style.display = "none";
}

function iniciarJogo() {
    noAtual = raiz;
    atualizarTela();
}

function reiniciarJogo(){
    exibirTelaInicial();
}

// Verifica se é folha, se não vanega pelos galhos
function responder(resposta) {
    if (!noAtual || noAtual instanceof NoFolha) return;

    if (resposta === "sim") 
        noAtual = noAtual.esquerda;
    else 
        noAtual = noAtual.direita;
  

  atualizarTela();
}

function atualizarTela() {
    caixaTexto.style.display ="block";
    elTexto.textContent = noAtual.valor;

    if (noAtual instanceof NoFolha) {
        elImg.src = noAtual.imagem;
        elImg.classList.add("imagem-folha");
        btnIniciar.style.display = "none";
        btnSim.style.display = "none";
        btnNao.style.display = "none";
        btnReiniciar.style.display = "inline-block";
    } else {
        elImg.src = "images/genius/img2.png";
        btnIniciar.style.display = "none";
        btnSim.style.display = "inline-block";
        btnNao.style.display = "inline-block";
        btnReiniciar.style.display = "none";
    }
}