const container = document.getElementById('card-container');

let cardsData = JSON.parse(localStorage.getItem('cardsData')) || [];

if (cardsData.length !== 100) {
  cardsData = [];
  for (let i = 1; i <= 100; i++) {
    cardsData.push({
      frontText: `Frente ${i}`,
      frontImage: 'https://via.placeholder.com/100',
      backText: `Reverso ${i}`,
      flipped: false
    });
  }
  localStorage.setItem('cardsData', JSON.stringify(cardsData));
}

function renderCards() {
  container.innerHTML = '';
  cardsData.forEach((cardData, index) => {
    const card = document.createElement('div');
    card.className = 'card' + (cardData.flipped ? ' flipped' : '');

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    const front = document.createElement('div');
    front.className = 'card-face card-front';
    const img = document.createElement('img');
    img.src = cardData.frontImage;
    const frontText = document.createElement('div');
    frontText.contentEditable = true;
    frontText.textContent = cardData.frontText;
    frontText.addEventListener('input', (e) => {
      cardsData[index].frontText = e.target.textContent;
      localStorage.setItem('cardsData', JSON.stringify(cardsData));
    });

    front.appendChild(img);
    front.appendChild(frontText);

    const back = document.createElement('div');
    back.className = 'card-face card-back';
    const backText = document.createElement('div');
    backText.contentEditable = true;
    backText.textContent = cardData.backText;
    backText.addEventListener('input', (e) => {
      cardsData[index].backText = e.target.textContent;
      localStorage.setItem('cardsData', JSON.stringify(cardsData));
    });

    back.appendChild(backText);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener('click', () => {
      cardData.flipped = !cardData.flipped;
      card.classList.toggle('flipped');
      localStorage.setItem('cardsData', JSON.stringify(cardsData));
    });

    container.appendChild(card);
  });
}

renderCards();
