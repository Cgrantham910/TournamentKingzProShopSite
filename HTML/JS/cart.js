// cart.js

// Function to add an item to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
      cart.push(product);
      saveCartToLocalStorage();
    }
  }
  
  // Function to save the cart to local storage
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to display cart items on the cart page
  function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  
    let totalAmount = 0;
    cartList.innerHTML = '';
  
    cartData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}</span>
      `;
      cartList.appendChild(listItem);
  
      // Calculate the total amount
      totalAmount += item.price;
    });
  
    // Update the total amount on the page
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
  }
  
  // Function to clear the cart
  function clearCart() {
    cart = [];
    saveCartToLocalStorage();
    displayCartItems();
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", () => {
    // Example: Assuming you have product buttons with "data-product-id" attribute on the main page.
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = parseInt(btn.dataset.productId);
        addToCart(productId);
        displayCartItems(); // Update cart display after adding a product
      });
    });
  
    const clearCartBtn = document.getElementById("clear-cart-btn");
    clearCartBtn.addEventListener("click", () => {
      clearCart();
    });
  
    // Call displayCartItems when the cart page loads to show any existing items in the cart
    displayCartItems();
  });
  