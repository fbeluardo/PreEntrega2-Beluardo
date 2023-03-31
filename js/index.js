// Define the products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10
  },
  {
    id: 2,
    name: "Product 2",
    price: 15
  },
  {
    id: 3,
    name: "Product 3",
    price: 20
  }
];

// Initialize the cart and total
let cart = [];
let total = 0;

// Select the HTML elements
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const clearCartButton = document.querySelector(".clear-cart");

// Function to display the cart items
function displayCart() {
  // Clear the cart items list
  cartItems.innerHTML = "";

  // Loop through the cart array and create a new li element for each item
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  // Update the total
  cartTotal.innerText = `$${total.toFixed(2)}`;
}

// Function to add an item to the cart
function addItemToCart(id) {
  // Find the product with the matching id
  const product = products.find(product => product.id === id);

  // Add the product to the cart
  cart.push(product);

  // Update the total
  total += product.price;

  // Display the cart items
  displayCart();
}

// Function to clear the cart
function clearCart() {
  // Remove all items from the cart and reset the total
  cart = [];
  total = 0;

  // Display the cart items
  displayCart();
}

// Add event listeners to the add to cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", event => {
    const id = parseInt(event.target.dataset.id);
    addItemToCart(id);
  });
});

// Add event listener to the clear cart button
clearCartButton.addEventListener("click", clearCart);
