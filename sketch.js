let mic;
let fft; // Análise de frequência
let angleOffset = 0 // Controle de rotação

function setup() {
  // Quadro para desenhar, do tamanho da janela do navegador
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES); 

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
  angleOffset += 0.3 // Ângulo de rotação

  // Resultado da análise de som em array de amplitudes de frequência
  let spectrum = fft.analyze();

  // Move a origem para o centro da tela
  translate(width / 2, height / 2);

  // Estilo do desenho
  noFill();
  strokeWeight(3);

  // Inicia o desenho de uma forma complexa
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    // Mapeia o índice do array para um ângulo (0 a 360 graus)
    let angle = map(i, 0, spectrum.length, 0, 360) + angleOffset;
    
    // Pega a amplitude (volume) para a frequência atual
    let amp = spectrum[i];

    // Mapeia a amplitude (0-255) para um raio (ex: de 20 a 300 pixels)
    let r = map(amp, 0, 100, 20, 300);

    // Converte coordenadas polares (ângulo, raio) para cartesianas (x, y)
    let x = r * cos(angle);
    let y = r * sin(angle);

    // Define a cor da linha baseada na amplitude
    stroke(amp, 255 - amp, 200);

    // Cria um vértice na posição calculada
    vertex(x, y);
  }
  // Fecha a forma, conectando o último ponto ao primeiro
  endShape(CLOSE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
