class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.frameAtual = 0
    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - this.variacaoY
    this.y = this.yInicial
    
  }
  
  estaColidindo(inimigo){
    noFill()
    var colisao = 0
    if(inimigo == inimigoAtirador){
      // rect(this.x+10, this.y+10, this.largura-25, this.altura-20)
      // rect(inimigo.x, inimigo.y, inimigo.largura - 10, inimigo.altura - 10)
      colisao = collideRectRect(
        this.x + 10,
        this.y + 10,
        this.largura - 25,
        this.altura - 20,
        inimigo.x + 23,
        inimigo.y + 5,
        inimigo.largura - 10,
        inimigo.altura - 10,
      )
    }
    else if(inimigo == poderInimigoAtirador){
      // rect(inimigo.x, inimigo.y+39, inimigo.largura - 10, inimigo.altura - 70)
      // rect(inimigoAtirador.x - 550, inimigoAtirador.y, 500, 30)
      colisao = collideRectRect(
        this.x + 10,
        this.y + 10,
        this.largura - 25,
        this.altura - 20,
        inimigo.x, 
        inimigo.y + 39, 
        inimigo.largura - 10, 
        inimigo.altura - 70,
      )
    }
    else{
      // rect(this.x+10, this.y+10, this.largura-25, this.altura-20)
      // rect(inimigo.x + 28, inimigo.y + 5, inimigo.largura - 10, inimigo.altura - 10)
      colisao = collideRectRect(
        this.x + 10,
        this.y + 10,
        this.largura - 25,
        this.altura - 20,
        inimigo.x + 28,
        inimigo.y + 5,
        inimigo.largura - 10,
        inimigo.altura - 10,
      )
    }
    
    return colisao
  }
  
  
}