document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const sideMenu = document.getElementById('sideMenu');

  menuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  });

  const buyButtons = document.querySelectorAll('.buy-button');

  buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent the card from flipping when clicking the button
    });
  });
});