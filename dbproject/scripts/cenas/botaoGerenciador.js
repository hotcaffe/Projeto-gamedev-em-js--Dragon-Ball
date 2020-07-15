class BotaoGerenciador{
  constructor(texto, x, y){
    this.texto = texto
    this.x = x
    this.y = y
    
    this.start = createP('Pressione qualquer tecla para começar')
    this.start.addClass('texto-tela-inicial')
    
    this.morte = createButton('Tentar novamente')
    this.morte.addClass('botao-tela-morte')
    this.morte.mousePressed(() => this.voltaCena())
    this.morte.hide()
        
    // this.botao = createButton(this.texto)
    // this.botao.mouseClicked(() => cenaAtual = 'jogo')
    // this.botao.addClass('texto-tela-inicial')
  }

  drawInicio(){
    this.start.position(this.x-425, this.y)
    // this.botao.position(this.x, this.y)
  }
  
  drawMorte(){
    this.morte.position(this.x-190+20, this.y+70)
    this.morte.show()
  }
  
  alteraCena(){
    this.start.remove()
    cenaAtual = 'jogo'
  }
  
  voltaCena(){
    jogo.setup()
    jogo.draw()
    inimigo.fail = 0
    this.morte.hide()
    // this.start = createP('Pressione qualquer tecla para começar')
    // this.start.addClass('texto-tela-inicial')
    // cenaAtual = 'telaInicial'
  }
  
}