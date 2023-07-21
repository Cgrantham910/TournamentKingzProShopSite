// cart.js
const cart = [];

function saveCartToLocalStorage() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartFromLocalStorage() {
  const cartData = localStorage.getItem(CART_KEY);
  if (cartData) {
    cart = JSON.parse(cartData);
  }
}

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

function renderCartPage() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    // Render cart items here using the cart array to retrieve product details
    for (const productId of cart) {
      // Get product details using the productId and render the cart item
      const cartItem = document.createElement('div');
      // Customize the cart item HTML structure as per your requirement
      cartItem.innerHTML = `<p>Product ID: ${productId}</p>`;
      cartContainer.appendChild(cartItem);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getCartFromLocalStorage();
  updateCartCount();
  renderCartPage();

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', handleAddToCartButtonClick);
  });
});
