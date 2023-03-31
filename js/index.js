// Get the product list and cart elements
const productList = document.querySelector('.product-list');
const cart = document.querySelector('.cart');

// Initialize the cart object and total price
let cartItems = [];
let cartTotal = 0;

// Check if a cart already exists in local storage and load it if it does
if (localStorage.getItem('cartItems')) {
  cartItems = JSON.parse(localStorage.getItem('cartItems'));
  cartTotal = JSON.parse(localStorage.getItem('cartTotal'));
  updateCart();
}

function addItem(item) {
  // Check if the item already exists in the cart
  let existingItem = cartItems.find(i => i.id === item.id);
  if (existingItem) {
    // If the item already exists, increment its quantity
    existingItem.quantity++;
  } else {
    // If the item does not exist, add it to the cart
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }
  
  // Update the cart and save to local storage
  updateCart();
  saveCart();
}