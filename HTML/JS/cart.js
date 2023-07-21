document.addEventListener('DOMContentLoaded', function() {
    // Initialize the cart with an empty array to store the items
    let cart = [];
  
    // Function to update the cart count in the navbar
    function updateCartCount() {
      const cartCountElement = document.getElementById('cart-count');
      cartCountElement.innerText = cart.length;
    }
  
    // Function to display the cart items in the cart page
    function displayCartItems() {
      const cartListElement = document.getElementById('cart-list');
      cartListElement.innerHTML = '';
  
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = item.name;
        cartListElement.appendChild(listItem);
      });
  
      updateTotalAmount();
      updateCartCount();
    }
  
    // Function to calculate and update the total amount in the cart page
    function updateTotalAmount() {
      const totalAmountElement = document.getElementById('total-amount');
      const totalAmount = cart.reduce((total, item) => total + item.price, 0);
      totalAmountElement.innerText = '$' + totalAmount.toFixed(2);
    }
  
    // Function to handle adding items to the cart
    function addToCart(name, price) {
      cart.push({ name, price });
      displayCartItems();
    }
  
    // Function to handle clearing the cart
    function clearCart() {
      cart = [];
      displayCartItems();
    }
  
    // Event listener for the "Add to Cart" buttons
    const addToCartButtons = document.getElementsByClassName('add-to-cart');
    Array.from(addToCartButtons).forEach(button => {
      button.addEventListener('click', () => {
        const productItem = button.parentElement;
        const productName = productItem.querySelector('h3').innerText;
        const productPrice = parseFloat(productItem.querySelector('.price').innerText.replace('$', ''));
        addToCart(productName, productPrice);
      });
    });
  
    // Event listener for the "Clear Cart" button
    const clearCartButton = document.getElementById('clear-cart-btn');
    clearCartButton.addEventListener('click', clearCart);
  });
  