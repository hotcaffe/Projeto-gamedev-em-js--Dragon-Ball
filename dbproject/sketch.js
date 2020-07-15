function preload(){
  imagemNuvemMai = loadImage('imagens/ceunuvensmai.png')
  imagemNuvemMen = loadImage('imagens/ceunuvemmen.png')
  imagemTerra = loadImage('imagens/cenarioterra.png')
  imagemNuvem = loadImage('imagens/cenarionuvemfrente.png')
  personagem = loadImage('imagens/gohantotal.png')
  imagemInimigo = loadImage('imagens/inimigos/Saibamans.png')
  
  namekTema = createAudio('musicas/namektema.mp3')
  telaInicialVento = createAudio('sons/VENTO.mp3')
  somMorte = loadSound('sons/morte.mp3')
  
  imagemGameOver = loadImage('imagens/gameover.png')
  namekTelaInicial = loadImage('imagens/Inicio/NamekTelaInicial.png')
  imagemInicialFundo1 = loadImage('imagens/Inicio/ImagemInicialFundo1.png')
  imagemInicialFundo2 = loadImage('imagens/Inicio/ImagemInicialFundo2.png')
  
  primeiroinimigo = loadImage('imagens/primeiroinimigo.png')
}


function setup() {
  createCanvas(1036, 1076);
  jogo = new Jogo()
  telaInicial = new TelaInicial()
  jogo.setup()
  telaInicial.setup()
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2)
  
  frameRate(40)
}


function keyReleased(){
  cenas[cenaAtual].keyReleased(key)
}


function draw() {
  cenas[cenaAtual].draw()
}

5