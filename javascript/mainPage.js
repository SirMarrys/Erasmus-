document.addEventListener('DOMContentLoaded', () => {
  // Side menu functionality
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const sideMenu = document.getElementById('sideMenu');

  menuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // Cart functionality
  const cartCount = document.getElementById('cartCount');
  const resetCartButton = document.getElementById('resetCartButton');

  function updateCartCount() {
    const count = localStorage.getItem('cartCount') || '0';
    if (cartCount) {
      cartCount.textContent = count;
    }
  }

  function resetCart() {
    localStorage.setItem('cartCount', '0');
    updateCartCount();
  }

  updateCartCount();

  if (resetCartButton) {
    resetCartButton.addEventListener('click', resetCart);
  }

  // Flip card functionality
  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  });

  // Buy button functionality
  const buyButtons = document.querySelectorAll('.buy-button');

  buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent the card from flipping when clicking the button
    });
  });
});