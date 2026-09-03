// Classes da Árvore de Decisão
class No {
    constructor(valor, imagem = genie2, esquerda = null, direita = null) {
        this.valor    =    valor;
        this.imagem   =   imagem;
        this.esquerda = esquerda;
        this.direita  =  direita;
    }
}

class NoFolha extends No {
    constructor(valor, imagem) {
        super(valor);
        this.imagem = imagem;
    }
}


const genie1 = "images/genies/img1.png";
const genie2 = "images/genies/img2.png";
const genie3 = "images/genies/img3.png";
const genie4 = "images/genies/img4.png";
const genie5 = "images/genies/img5.png";
const genie6 = "images/genies/img6.png";


// Objetos das folhas
const doctorStranger  = new NoFolha("Eu sei que você está pensando no Dr. Estranho!",    "images/gifs/DoctorStranger.gif");
const thor            = new NoFolha("Eu suponho que esteja pensando no Thor!",                     "images/gifs/Thor.gif");
const hulk            = new NoFolha("Eu acredito que esteja falando do Hulk!",                     "images/gifs/Hulk.gif");
const spiderMan       = new NoFolha("É no Homem Aranha que você está pensando!",              "images/gifs/SpiderMan.gif");
const captainMarvel   = new NoFolha("É a Capitã Marvel!",                                 "images/gifs/CaptainMarvel.gif");
const blackPanter     = new NoFolha("Eu estou certo que seja o Pantera Negra!",             "images/gifs/BlackPanter.gif");
const ironMan         = new NoFolha("Só pode ser o Homem de Ferro!",                            "images/gifs/IronMan.gif");
const captainAmerica  = new NoFolha("Com certeza é o Capitão Ameria!",                   "images/gifs/CaptainAmerica.gif");
const hawkeye         = new NoFolha("É o Gavião Arqueiro!",                                     "images/gifs/Hawkeye.gif");
const blackWidow      = new NoFolha("Eu sei que você está pensando na Viúva Negra!",         "images/gifs/BlackWidow.gif");
const superman        = new NoFolha("Eu suponho que esteja pensando no Superman!",             "images/gifs/Superman.gif");
const supergirl       = new NoFolha("Eu acredito que esteja falando da Supergirl!",           "images/gifs/Supergirl.gif");
const greenLantern    = new NoFolha("É no Lanterna Verde que você está pensando!",         "images/gifs/GreenLantern.gif");
const wonderWoman     = new NoFolha("É na Mulher Maravilha que você está pensando!",        "images/gifs/WonderWoman.gif");
const shazam          = new NoFolha("Eu estou certo que seja o Shazam!",                         "images/gifs/Shazam.gif");
const staticShock     = new NoFolha("Só pode ser o Super-Choque!",                          "images/gifs/StaticShock.gif");
const batman          = new NoFolha("Com certeza é o Batman!",                                   "images/gifs/Batman.gif");
const flash           = new NoFolha("É o Flash!",                                              "images/gifs/TheFlash.gif");
const arrow           = new NoFolha("Eu tenho certeza que seja o Arqueiro Verde!",                "images/gifs/Arrow.gif");
const cyborg          = new NoFolha("Só pode ser o Cyborg!",                                     "images/gifs/Cyborg.gif");

// Árvore
//Nível folha
const estudaMagia            = new No("Estudou magia?",                                        genie6, doctorStranger,               thor);
const transFisica            = new No("Sofre uma Transformação física ao ativar o poder?",     genie2, hulk,                    spiderMan);
const armaduraVibranium      = new No("Sua armadura é feita de vibranium?",                    genie6, blackPanter,               ironMan);
const lutaArcoFlecha         = new No("Usa arco e flecha?",                                    genie5, hawkeye,                blackWidow);
const sexoMasculino          = new No("O herói é masculino?",                                  genie6, superman,                supergirl);
const origemMitologia        = new No("O herói tem origem nas amazonas?",                      genie5, wonderWoman,                shazam);
const manipulaEletricidade   = new No("O heroi manipula eletricidade?",                        genie5, staticShock,                batman);
const usaFlecha              = new No("Usa arco e flecha?",                                    genie4, arrow,                      cyborg); 
//Nivel 3
const exposicaoRadiacao      = new No("O poder veio de radiação ou de uma picada radioativa?", genie4, transFisica,         captainMarvel);
const armaduratecnologica    = new No("Possui armadura?",                                      genie2, armaduraVibranium,  captainAmerica);
const anelEnergetico         = new No("O poder do herói vem de um anel cosmico?",              genie4, greenLantern,      origemMitologia);
const velocista              = new No("O heroi é um velocista?",                               genie2, flash,                   usaFlecha);
//Nivel 2
const poderMagicoMitologico  = new No("O poder é magico ou mitológico?",                      genie3, estudaMagia,      exposicaoRadiacao);
const armaduraSoro           = new No("Usa armadura ou escudo?",                              genie3, armaduratecnologica, lutaArcoFlecha);
const nasceuPlaneta          = new No("O herói nasceu em outro planeta?",                     genie2, sexoMasculino,       anelEnergetico);
const capaClassica           = new No("O herói usa capa ou sobretudo?",                       genie3, manipulaEletricidade,     velocista);
//Nivel 1
const ehSobreHumano          = new No("O poder de herói e sobre-humano?",                     genie2, poderMagicoMitologico, armaduraSoro);
const ehPlanetaDivindades    = new No("O herói é de outro planeta ou tem poderes divinos?",   genie3, nasceuPlaneta,         capaClassica);
// Raiz da Árvore
const raiz                   = new No("O personagem é um herói da marvel?",                   genie2, ehSobreHumano,  ehPlanetaDivindades);



let noAtual = null;
let caixaTexto, elTexto, elImg, btnIniciar, btnSim, btnNao, btnReiniciar;

// Garante o carregamento dos elementos antes de executar a lógica
document.addEventListener("DOMContentLoaded", () => {
    elTexto      =  document.getElementById("texto-exibido");
    elImg        =      document.getElementById("genio-img");
    btnIniciar   =    document.getElementById("btn-iniciar");
    btnSim       =        document.getElementById("btn-sim");
    btnNao       =        document.getElementById("btn-nao");
    btnReiniciar =  document.getElementById("btn-reiniciar");

    // Atribuição dos eventos de clique
    btnIniciar.addEventListener("click",        iniciarJogo);
    btnSim.addEventListener("click", () => responder("sim"));
    btnNao.addEventListener("click", () => responder("nao"));
    btnReiniciar.addEventListener("click",    reiniciarJogo);

    // Define a tela inicial assim que carrega
    exibirTelaInicial();
});

function exibirTelaInicial() {
    noAtual = null;
    //elTexto.textContent = "Clique no botão abaixo para iniciar!";
    caixaTexto                 = document.getElementById("pergunta-box");
    caixaTexto.style.display   =                                  "none";
    elImg.src                  =                                  genie1;

    elImg.classList.remove("imagem-folha");
    btnIniciar.style.display   =                          "inline-block";
    btnSim.style.display       =                                  "none";
    btnNao.style.display       =                                  "none";
    btnReiniciar.style.display =                                  "none";
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
        elImg.src                  =  noAtual.imagem;
        elImg.classList.add("imagem-folha");
        btnIniciar.style.display   =          "none";
        btnSim.style.display       =          "none";
        btnNao.style.display       =          "none";
        btnReiniciar.style.display =  "inline-block";
    } 
    else {
        elImg.src = noAtual.imagem || genie2;
        btnIniciar.style.display   =          "none";
        btnSim.style.display       =  "inline-block";
        btnNao.style.display       =  "inline-block";
        btnReiniciar.style.display =          -"none";
    }
}