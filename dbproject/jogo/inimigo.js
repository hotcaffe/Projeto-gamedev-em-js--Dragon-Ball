class Inimigo extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, skin, select, velocidade){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, skin)
    this.velocidade = randomInt(10, 20)
    this.y = randomInt(height-150, 20)
    if(this.select == 1){
      this.x = width
    }
    else{
      this.x = randomInt(width, width+width)*2
    }
    this.select = select
    this.skin = skin
    this.tempo = 1
    this.fail = 0
    this.char = 0    
  }


  move(){
    
    if(inimigo.fail == 1){
      image(imagemGameOver, width/2 - 220, height/2 - 90)
      image(imagemInimigo, width/2-320, height/2-68, 102, 102, matrizFail[this.char][0], matrizFail[this.char][1], 34, 34)
      image(imagemInimigo, width/2+210, height/2-68, 102, 102, matrizFail[this.char][0], matrizFail[this.char][1], 34, 34)
    }
    
    if(this.fail == 0){
      if(this.select == 1){
      poderInimigoAtirador.x = (this.x-width)-330
      poderInimigoAtirador.y = this.y - 35
      this.skin = 2
      if(pontuacao.pontos <= 20){
        if(this.x >= width - (0.2*width)){
          this.x = this.x - 15
          this.skin = 1
        }
      }
      else{
        poderInimigoAtirador.largura -= 100
        this.skin = 1
        if(this.tempo >= 1){
          this.tempo = -(randomInt((25*width),(30*width)))  
        }
        else{
          this.x = this.x - 25
          if(this.x < this.tempo){
            poderInimigoAtirador.largura = width+330
            poderInimigoAtirador.larguraSprite = 1
            this.y = randomInt(height-150, 20)
            this.x = width
            this.skin = 1
            pontuacao.pontos = 0
            this.tempo = 1
          }
        }
      }
    }
    
    
      else{
        this.x = this.x - this.velocidade
        this.variacaoY = randomInt(100, 800)
        if(this.x <= -width){
          let aparecer = randomInt(0, 8)
          if(aparecer >= 7){
            this.y = randomInt(height-150,20)
            this.x = randomInt(width, 3*width)
            this.velocidade = randomInt(20, 40)
          }
        }
      }
    } else{
        if(this.x < width && this.x > -width){
          if(this.select == 1){
            this.skin = 1
          }
          this.x = this.x - this.velocidade
        }
        else{
          this.x = width * 2
          this.y = height * 2
        }
    }
  } 
  
}

function randomInt(min, max){
  return parseInt((Math.random() * (max - min + 1)) + min)
}