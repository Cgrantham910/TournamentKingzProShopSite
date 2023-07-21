// cart.js
const cart = [];

function addToCart(productId) {
  cart.push(productId);
  updateCartCount();
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
}

function handleAddToCartButtonClick(event) {
  const productItem = event.target.closest('.product-item');
  const productId = productItem.dataset.productId;
  addToCart(productId);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', handleAddToCartButtonClick);
  });
});
