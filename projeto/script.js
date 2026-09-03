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

const drEstranho = new NoFolha("Eu sei que você está pensando no Dr. Estranho!", "Gifs/DoctorStranger.gif");
const thor = new NoFolha("Eu suponho que esteja pensando no Thor!", "Gifs/Thor.gif");
const hulk = new NoFolha("Eu acredito que esteja falando do Hulk!", "Gifs/Hulk.gif");
const homemAranha = new NoFolha("É no Homem Aranha que você está pensando!", "Gifs/SpiderMan.gif");
const capitaMarvel = new NoFolha("É a Capitã Marvel!", "Gifs/CaptainMarvel.gif");
const panteraNegra = new NoFolha("Eu estou certo que seja o Pantera Negra!", "Gifs/BlackPanter.gif");
const homemFerro = new NoFolha("Só pode ser o Homem de Ferro!", "Gifs/IronMan.gif");
const caputaoAmerica = new NoFolha("Com certeza é o Capitão Ameria!", "Gifs/CaptainAmerica.gif");
const gaviaoArqueiro = new NoFolha("É o Gavião Arqueiro!", "Gifs/Hawkeye.gif");
const viuvaNegra = new NoFolha("Eu sei que você está pensando na Viúva Negra!", "Gifs/Black Widow.gif");
const superman = new NoFolha("Eu suponho que esteja pensando no Superman!", "Gifs/Superman.gif");
const supergirl = new NoFolha("Eu acredito que esteja falando da Supergirl!", "Gifs/Supergirl.gif");
const lanternaVerde = new NoFolha("É no Lanterna Verde que você está pensando!", "Gifs/GreenLantern.gif");
const mulherMaravilha = new NoFolha("É na Mulher Maravilha que você está pensando!", "Gifs/WonderWoman.gif");
const shazam = new NoFolha("Eu estou certo que seja o Shazam!", "Gifs/Shazam.gif");
const superChoque = new NoFolha("Só pode ser o Super-Choque!", "Gifs/StaticShock.gif");
const batman = new NoFolha("Com certeza é o Batman!", "Gifs/Batman.gif");
const flash = new NoFolha("É o Flash!", "Gifs/TheFlash.gif");
const arqueiroVerde = new NoFolha("Eu tenho certeza que seja o Arqueiro Verde!", "Gifs/Arrow.gif");
const cyborg = new NoFolha("Só pode ser o Cyborg!", "Gifs/Cyborg.gif");

// Objetos dos nós intermediários
//const noVento = new No("O vento está muito forte?", noCapa, noGuardaChuva);

//Nível folha
const estudaMagia = new No("É um estudioso da magia?", drEstranho, thor);
const transFisica = new No("Sofre uma Transformação física drastica ao ativar o poder?", hulk, homemAranha);
const armaduraVibranium = new No("A armadura é feita de vibranium e ele é o rei de uma nação africana?", panteraNegra, homemFerro);
const lutaArcoFlecha = new No("Luta majoritariamente a distância usando arco e flecha?", gaviaoArqueiro, viuvaNegra);
const sexoMasculino = new No("O Personagem é do sexo masculino?", superman, supergirl);
const origemMitologia = new No("O heroi tem origem ligada a mitologia de deuses antigos/amazonas?", mulherMaravilha, shazam);
const manipulaEletricidade = new No ("O heroi manipula eletricidade como seu poder principal?", superChoque, batman);
const usaFlecha = new No ("O heroi usa um arco e flecha como arma principal?", arqueiroVerde, cyborg);

//Nivel 3
const exposicaoRadiacao = new No("O poder surgiu de exposição a radiação ou uma picada radioativa?", transFisica, capitaMarvel);
const armaduratecnologica = new No("Usa uma armadura tecnologica completa como sua principal arma de combate?", armaduraVibranium, caputaoAmerica);
const anelEnergetico = new No("Os poderes do heroi vem de um anel energético cosmico?", lanternaVerde, origemMitologia);
const velocista = new No("O heroi é um velocista?", flash, usaFlecha);

//Nivel 2
const poderMagicoMitologico = new No("A origem do poder é magica ou mitológica?", estudaMagia, exposicaoRadiacao);
const armaduraSoro = new No("Depende de uma armadura, ou de um soro científico para ter vantagem sobre-humana?", armaduratecnologica, lutaArcoFlecha);
const nasceuPlaneta = new No("O heroi nasceu em outro planeta?", sexoMasculino, anelEnergetico);
const capaClassica = new No("O heroi usa uma capa classica ou um sobretudo?", manipulaEletricidade, velocista);

//Nivel 1
const ehSobreHumano = new No("O poder de heroi e sobre-humano e não depende de tecnologia, ou treinamento?", poderMagicoMitologico, armaduraSoro);
const ehPlanetaDivindades = new No("O heroi é de outro planeta ou tem poderes concedidos por divindades/entidades cosmicas?",nasceuPlaneta, capaClassica);

// Raiz da Árvore
const raiz = new No("O personagem é um heroi da marvel?", ehSobreHumano, ehPlanetaDivindades);

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
  elImg.src = "imagens/genio.png";

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

  if (resposta === "sim") {
    noAtual = noAtual.esquerda;
  } else {
    noAtual = noAtual.direita;
  }

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
    elImg.src = "imagens/genio.png";
    btnIniciar.style.display = "none";
    btnSim.style.display = "inline-block";
    btnNao.style.display = "inline-block";
    btnReiniciar.style.display = "none";
  }
}