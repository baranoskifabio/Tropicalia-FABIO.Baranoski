document.addEventListener('DOMContentLoaded', function (){

const botaoacessibilidade = document.grtElementbyid('botao-acesssibilidade');
const opcoesDeAcesibilidade = document.grtElementByid ('opcoes-acessibilidade');

botaoDeAcesibilidade.addEventListener ('click', function(){
botaoDeAcesibilidade.classList.toggle('rotacao-botao');
opcoesDeAcesibilidade.classList.toggle('apresenta-list')
})


    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte +=0.1;
    document.body.style.fontSize =  `${tamanhoAtualFonte}rem`;
});
diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
});
});