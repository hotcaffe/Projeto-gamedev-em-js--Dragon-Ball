class TelaInicial{
  constructor(){
  }
  
  setup(){
    inicialFundo1 = new Cenario(imagemInicialFundo1, 0.1)
    inicialFundo2 = new Cenario(imagemInicialFundo2, 0.5)
    inicialFundo1.y = -75
    telaInicialVento.loop()
  }
  
  keyReleased(){
    if(key){
      botaoGerenciador.alteraCena()
    }
  
  }
  
  
  draw(){
    telaInicialVento.volume(0.1)
    
    this._botao()
    this._imagemDeFundo()
    
    inicialFundo1.exibe()
    inicialFundo1.move()
    
    inicialFundo2.exibe()
    inicialFundo2.move()
    
    this._texto()
  }
  
  _imagemDeFundo(){
    image(namekTelaInicial, 0, 0, width, height)
  }
  
  _texto(){
    // textAlign(CENTER)
    // textSize(40)
    // fill(0, 111, 66)
    // text('Pressione qualquer tecla para começar', width/2, height-100)     
  }
  
  _botao(){
    botaoGerenciador.drawInicio()
  }
}