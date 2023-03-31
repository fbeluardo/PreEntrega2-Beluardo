// Create an empty cart object
let cart = [];

// Check if there are any items in local storage
if (localStorage.getItem('cart')) {
  // If there are, parse the JSON and set the cart object to the parsed data
  cart = JSON.parse(localStorage.getItem('cart'));
}

// Function to add an item to the cart
function addItem(item) {
  // Check if the item is already in the cart
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }
  // If the item is not already in the cart, add it
  if (!found) {
    item.quantity = 1;
    cart.push(item);
  }
  // Save the updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove an item from the cart
function removeItem(id) {
  // Find the index of the item with the specified ID
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      index = i;
      break;
    }
  }
  // If the item was found, remove it from the cart
  if (index !== -1) {
    cart.splice(index, 1);
  }
  // Save the updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display the items in the cart
function displayCart() {
  // Get a reference to the cart element
  let cartElement = document.getElementById('cart');
  // Clear any existing items from the cart
  cartElement.innerHTML = '';
  // Loop through each item in the cart and display it
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let li = document.createElement('li');
    li.textContent = item.name + ' x ' + item.quantity;
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
      removeItem(item.id);
      displayCart();
    });
    li.appendChild(removeButton);
    cartElement.appendChild(li);
  }
}

// Function to clear the cart
function clearCart() {
  cart = [];
  localStorage.removeItem('cart');
  displayCart();
}

// Add an event listener to the Clear Cart button
document.getElementById('clear-cart')
