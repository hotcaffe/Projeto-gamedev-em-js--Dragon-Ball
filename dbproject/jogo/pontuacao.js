class Pontuacao{
  constructor(){
    this.pontos = 0
    this.cronometro = 0
  }

  exibe(){
    text(this.pontos, width - 30, 50)
  }
  
  adicionarPontos(){
    this.pontos = this.pontos + 0.05  
  }
  
}