/*
  OBJETIVO DO MEU SCRIPT:
Quando clicamos no botão, temos que MOSTRAR  
a imagem do fundo correspondente
 
- PASSO 1 - dar um jeito de pegar o elemento HTML dos botões;
- PASSO 2 - dar um jeito de identificar o clique do usuário no botão;
- PASSO 3 - desmarcar o botão selecionado anterior;
- PASSO 4 - marcar o botão como se estivesse selecionada;
- PASSO 5 - esconder a imagem de fundo  anterior;
- PASSO 6 - fazer aparecer a imagem  de fundo correspondente  ao botão clicado.
*/


//- PASSO 1 - dar um jeito de pegar o elemento HTML dos botões;
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens= document.querySelectorAll('.imagem');


//- PASSO 2 - dar um jeito de identificar o clique do usuário no botão; 

botoesCarrossel.forEach((botao,indice) => {
  botao.addEventListener('click', () => {
 
console.log(indice);

    //- PASSO 3 - desmarcar o botão selecionado anterior;
  
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
    //- PASSO 4 - marcar o botão como se estivesse selecionada;
    botao.classList.add('selecionado');

    //- PASSO 5 - esconder a imagem ativa de fundo  anterior;
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
   // - PASSO 6 - fazer aparecer a imagem  de fundo correspondente  ao botão clicado.
   console.log(imagens) 
   imagens[indice].classList.add('ativa');
  })
})



