document.addEventListener('DOMContentLoaded', function() {
  const colorButtons = document.querySelectorAll('.color-btn');
  const productImage = document.getElementById('productImage');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const popup = document.getElementById('addToCartPopup');
  const closePopupBtn = document.getElementById('closePopup');
  const cartIcon = document.querySelector('.cart-icon');
  const cartCount = document.getElementById('cartCount');

  // Initialize cart count from localStorage
  let count = parseInt(localStorage.getItem('cartCount')) || 0;

  function updateCartCount() {
    cartCount.textContent = count;
    localStorage.setItem('cartCount', count.toString());
  }

  // Color switching functionality
  colorButtons.forEach(button => {
    button.addEventListener('click', function() {
      colorButtons.forEach(btn => btn.classList.remove('selected'));
      this.classList.add('selected');
      const color = this.getAttribute('data-color');
      productImage.src = `../../img/ath_${color}.png`;
      productImage.alt = `audio-technica ATH-M50x - ${color.charAt(0).toUpperCase() + color.slice(1)}`;
    });
  });

  // Add to cart functionality
  addToCartBtn.addEventListener('click', function() {
    count++;
    updateCartCount();
    popup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Close the popup when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  // Initialize cart count display
  updateCartCount();
});