// cart.js

// Get the cart count element
const cartCountElement = document.getElementById('cart-count');

// Initialize the cart items array
let cartItems = [];

// Function to update the cart count
function updateCartCount() {
  cartCountElement.textContent = cartItems.length;
}

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

// Function to update the cart total price in the HTML
function updateCartTotalPrice() {
  const cartTotalPriceElement = document.getElementById('cart-total-price');
  const totalPrice = calculateTotalPrice();
  cartTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to add a product to the cart
function addToCart(productName, productPrice, productWeight) {
  const item = {
    name: productName,
    price: productPrice,
    weight: productWeight,
  };
  cartItems.push(item);
  updateCartCount();
  updateCartTotalPrice();
  saveCartToLocalStorage();
}

// Function to remove a product from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartCount();
  updateCartTotalPrice();
  saveCartToLocalStorage();
  displayCartItems();
}

// Function to save the cart data to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to load cart data from local storage
function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem('cartItems');
  if (cartData) {
    cartItems = JSON.parse(cartData);
    updateCartCount();
    updateCartTotalPrice();
  }
}

// Function to display cart items in the HTML
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  cartItemsContainer.innerHTML = '';

  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
        <span class="cart-item-weight">${item.weight}</span>
      </div>
      <button class="remove-from-cart" data-index="${index}">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });

  const removeButtons = document.querySelectorAll('.remove-from-cart');
  removeButtons.forEach((button) => {
    button.addEventListener('click', handleRemoveFromCartClick);
  });
}

// Function to handle the "Remove" button click event
function handleRemoveFromCartClick(event) {
  const index = event.target.dataset.index;
  removeFromCart(index);
  displayCartItems();
}

// Function to clear the cart
function clearCart() {
  cartItems = [];
  updateCartCount();
  updateCartTotalPrice();
  saveCartToLocalStorage();
  displayCartItems();
}

// Function to initialize the cart
function initCart() {
  loadCartFromLocalStorage();
  displayCartItems();
}

// Attach click event listener to the "Clear Cart" button
const clearCartButton = document.getElementById('clear-cart-button');
clearCartButton.addEventListener('click', clearCart);

// Attach click event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', handleAddToCartClick);
});

// Initialize the cart
initCart();




// cart.js
const cart = [];

function addToCart(productId) {
  cart.push(productId);
  console.log(`Product with ID ${productId} added to the cart.`);
  // You can perform additional operations here if needed
}

function handleAddToCartButtonClick(event) {
  const productId = event.target.getAttribute('data-product-id');
  addToCart(productId);
}

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', handleAddToCartButtonClick);
  });
});
