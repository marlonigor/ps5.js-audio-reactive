let mic;

let fft; // Análise de frequência

function setup() {
  // Quadro para desenhar, do tamanho da janela do navegador
  createCanvas(windowWidth, windowHeight);

  // Objeto de entrada de áudio
  mic = new p5.AudioIn();

  // Captura de áudio
  mic.start();

  // Objeto FFT - Fast Fourier Transform
  fft = new p5.FFT();

  // Entrada do FFT
  fft.setInput(mic);


}

function draw() {
  // Pinta o fundo de preto a cada quadro
  background(0);

  // Resultado da análise de som em array de amplitudes de frequência
  let spectrum = fft.analyze();

  console.log(spectrum);
}