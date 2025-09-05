let mic;

function setup() {
  // Quadro para desenhar, do tamanho da janela do navegador
  createCanvas(windowWidth, windowHeight);

  // Objeto de entrada de áudio
  mic = new p5.AudioIn();

  // Captura de áudio
  mic.start();

}

function draw() {
  // Pinta o fundo de preto a cada quadro
  background(0);
}