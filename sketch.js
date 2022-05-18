// variaves da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//variaves da velocidade
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaves raquete
let xRaquete = 5;
letyRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
    createCanvas(600, 400);
}


function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;

    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio  > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
}

