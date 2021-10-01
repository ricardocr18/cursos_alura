//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//variáveis da velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 99;

//variáveeis do oponente
let xRaqueteOponente =585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() { //Criação da borda
  createCanvas(600, 400);
}

function draw() {
  background(0); // escolhendo a cor de fundo
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete); 
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente); 
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}  
    
function mostraBolinha(){
  circle(xBolinha,yBolinha, diametro);
}
  
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
  
function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha  - raio < 0){
        velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
  }    
}

function mostraRaquete(x, y){
  rect(x, y,raqueteComprimento,raqueteAltura);
}

// para que as setas se movimente tem que clicar no quadro do jogo.
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }  
}

function verificaColisaoRaquete(x,y){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
} 


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  fill(255); //muda a cor
  text(meusPontos, 278, 26);
  text(pontosDoOponente,321, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}