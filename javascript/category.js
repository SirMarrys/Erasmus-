document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  const cartCount = document.getElementById('cartCount');

  function updateCartCount() {
    const count = localStorage.getItem('cartCount') || '0';
    if (cartCount) {
      cartCount.textContent = count;
    }
  }

  updateCartCount();

  productCards.forEach(card => {
    const images = card.querySelectorAll('.product-image img');
    let currentIndex = 0;

    function switchImage() {
      images[currentIndex].classList.add('hidden');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.remove('hidden');
    }

    setInterval(switchImage, 7500); // Switch every 7.5 seconds
  });
});