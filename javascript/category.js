document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');

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