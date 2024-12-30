document.addEventListener('DOMContentLoaded', function() {
  const productImage = document.getElementById('productImage');
  const colorButtons = document.querySelectorAll('.color-btn');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const cartPopup = document.getElementById('cartPopup');
  const closePopup = document.getElementById('closePopup');

  colorButtons.forEach(button => {
    button.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      productImage.src = `../../img/OpenRun_${color}.jpg`;
    });
  });

  addToCartBtn.addEventListener('click', function() {
    cartPopup.style.display = 'block';
  });

  closePopup.addEventListener('click', function() {
    cartPopup.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const addToCartBtn = document.getElementById('addToCartBtn');
  const popup = document.getElementById('addToCartPopup');
  const closePopupBtn = document.getElementById('closePopup');

  addToCartBtn.addEventListener('click', function() {
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
});