// Variavéis
const cards = document.querySelectorAll('.cardExp'); // aqui seleciona todos os cards
const conteudo = document.querySelectorAll('.verMais');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', ()=>{
    conteudo[i].classList.toggle('ver');
  })

  
}
