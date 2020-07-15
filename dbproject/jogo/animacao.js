class Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, skin){
    this.matriz = matriz
    this.imagem = imagem
    this.largura = largura
    this.altura = altura
    this.skin = skin
    this.x = x
    this.variacaoY = variacaoY
    this.y = height - this.altura - this.variacaoY
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite
    
    this.movimento = 0
    
    this.frameAtual = 0 
  }
  
  
  tras(){
    this.movimento = 3
  }

  frente(){
    this.movimento = 2
  }
  descer(){
    this.movimento = 1
  }
  parado(){
    this.movimento = 0
  
     // constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    // Personagem(matrizPersonagem, personagem, 30, 40, 130, 150, 130, 150)
  
  }
  
  
  
  
  exibe(){
  image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.movimento][0], this.matriz[0][1], this.larguraSprite, this.alturaSprite)

  this.anima()
  } 
  
  exibeInimigo(){
  image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.skin][0], this.matriz[this.skin][1], this.larguraSprite, this.alturaSprite)
    
  

  this.anima()
  }
  
  
  anima(){
    this.frameAtual++
    if(this.frameAtual >= this.matriz.length){
      this.frameAtual = 0
    }
    
  }
}
