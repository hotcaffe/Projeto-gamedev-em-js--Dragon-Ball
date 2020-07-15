class Jogo{
  constructor(){
  
  }
  
  setup(){
    cenarioTrasMai = new Cenario(imagemNuvemMai, 2)
    cenarioTrasMen = new Cenario(imagemNuvemMen, 1)
    cenarioFrente = new Cenario(imagemTerra, 3)  
    cenarioNuvem = new Cenario(imagemNuvem, 10)
    pontuacao = new Pontuacao()
    cenarioNuvem.y = 100
    personagemAtivo = new Personagem(matrizPersonagem, personagem, 30, 40, 90, 150, 90, 150)
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigo2 = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigo3 = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigo4 = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigo5 = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigo6 = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigo7 = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigo8 = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 104, 40, 52, 20, 0, 0)
    inimigoAtirador = new Inimigo(matrizInimigo, imagemInimigo, 0, 0, 74, 76, 35, 38, 1, 1)
    poderInimigoAtirador = new Inimigo(matrizInimigo, imagemInimigo, 250, 250, width+330, 96, 1, 24, 3, 2)

    inimigos.push(inimigo)
    inimigos.push(inimigo2)
    inimigos.push(inimigo3)
    inimigos.push(inimigo4)
    inimigos.push(inimigo5)
    inimigos.push(inimigo6)
    inimigos.push(inimigo7)
    inimigos.push(inimigo8)

    inimigos.push(inimigoAtirador)

    
  }

  keyReleased(){
    if (keyCode === 37 || keyCode === 40 || keyCode === 39){
      personagemAtivo.parado()   
    }  
  }
  
  draw(){
    
    namekTema.loop()
    namekTema.volume(0.05)
    telaInicialVento.volume(0.0)
    
    cenarioTrasMai.exibe()
    cenarioTrasMai.move()

    cenarioTrasMen.exibe()
    cenarioTrasMen.move()

    cenarioFrente.exibe()
    cenarioFrente.move()


    if(pontuacao.pontos >= 10){
      poderInimigoAtirador.exibeInimigo()
      if(personagemAtivo.estaColidindo(poderInimigoAtirador)){
        inimigo.fail = 1
        inimigos.forEach(inimigo => {
          inimigo.fail = 1
          inimigo.char = 1
        })
        personagemAtivo.largura = 1
        personagemAtivo.altura = 1
        personagemAtivo.larguraSprite = 1
        personagemAtivo.alturaSprite = 1
        poderInimigoAtirador.y = height*2
        console.log("COLISAO")
        botaoGerenciador.drawMorte()
      }
      if(poderInimigoAtirador.larguraSprite < 70){
        poderInimigoAtirador.larguraSprite += 5
      }
    }

    personagemAtivo.exibe()

    if(keyIsDown(UP_ARROW) && personagemAtivo.y > 7){
      personagemAtivo.y -= 15
      personagemAtivo.parado()
    }
    if(keyIsDown(DOWN_ARROW) && personagemAtivo.y < height - 190){
      personagemAtivo.y += 15
      personagemAtivo.descer()
    }
    if(keyIsDown(LEFT_ARROW) && personagemAtivo.x > 30){
      personagemAtivo.x -= 13
      personagemAtivo.tras()

    }
    if(keyIsDown(RIGHT_ARROW) && personagemAtivo.x < width - 100){
      personagemAtivo.x += 10
      personagemAtivo.frente()
    }

    inimigos.forEach(inimigo => {
      inimigo.exibeInimigo()
      inimigo.move()
      if(personagemAtivo.estaColidindo(inimigo)){
        somMorte.jump(0.6)
        inimigos.forEach(inimigo => {
          inimigo.fail = 1
          inimigo.char = 0
          botaoGerenciador.drawMorte()
        })
        personagemAtivo.largura = 1
        personagemAtivo.altura = 1
        personagemAtivo.larguraSprite = 1
        personagemAtivo.alturaSprite = 1
        poderInimigoAtirador.y = height*2
        console.log("colidiu")
      }
    })

    pontuacao.adicionarPontos()


    cenarioNuvem.exibe()
    cenarioNuvem.move()   
   }

}