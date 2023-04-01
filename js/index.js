// DEFINICION DE VARIABLES / INSUMOS *************************************************************************
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

// INICIALIZACIÓN DE LA VARIABLE CARRITO Y TOTAL****************************************************************
let cart = [];
let total = 0;

// SELECCIÓN DE LOS ELEMENTOS DE HTML***************************************************************************
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const clearCartButton = document.querySelector(".clear-cart");

// FUNCION PARA DESPLEGAR EL CARRITO **************************************************************************
function displayCart() {
  // LIMPIAR EL CARRITO DE PRODUCTOS **************************************************************************
  cartItems.innerHTML = "";

  // RECORRER EL CARRITO Y CREAR UN ELEMENTO LI PARA CADA ARTICULO ********************************************
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  //  ACTUALIZAR EL TOTAL DE PRODUCTOS ************************************************************************
  cartTotal.innerText = `$${total.toFixed(2)}`;
}

// FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO ****************************************************************
function addItemToCart(id) {
  // UTILIZAR EL FIND PARA ENCONTRAR EL ID ********************************************************************
  const product = products.find(product => product.id === id);

  // AGREGAR EL PRODUCTO AL CARRITO ***************************************************************************
  cart.push(product);

  // ACTUALIZAR EL TOTAL **************************************************************************************
  total += product.price;

  // MOSTRAR LOS ARTICULOS DEL CARRITO ************************************************************************
  displayCart();
}

// FUNCION LIMPIAR EL CARRITO *********************************************************************************
function clearCart() {
  // ELIMINAR TODOS LOS ARTICULOS DEL CARRITO Y VOLVER EL TOTAL A 0 *******************************************
  cart = [];
  total = 0;

  // MOSTRAR LOS ARTICULOS DEL CARRITO ************************************************************************
  displayCart();
}

// AGREGAR EVENT LISTENERS AL BOTON AGREGAR PRODUCTO **********************************************************
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", event => {
    const id = parseInt(event.target.dataset.id);
    addItemToCart(id);
  });
});

// AGREGAR EVENT LISTENER AL BOTON LIMPIAR CARRITO ***********************************************************
clearCartButton.addEventListener("click", clearCart);
