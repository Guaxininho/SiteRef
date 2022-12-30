// Variavéis
const cards = document.querySelectorAll('.cardExp'); // aqui seleciona todos os cards
const conteudo = document.querySelectorAll('.verMais');
const verMais = document.querySelectorAll('.clikvermais');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', ()=>{
    verMais[i].classList.toggle('naoVer');
    conteudo[i].classList.toggle('ver');
  })

  
}
