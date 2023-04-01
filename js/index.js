// DEFINICION DE VARIABLES / INSUMOS *************************************************************************
const productos = [
  {
    id: 1,
    nombre: "Alcohol 96° 1000 ml Porta",
    precio: 200
  },
  {
    id: 2,
    nombre: "Alcohol en gel 5000 ml Porta",
    precio: 2000
  },
  {
    id: 3,
    nombre: "Clorexidina con dosificador",
    precio: 1000
  }
];

// INICIALIZACIÓN DE LA VARIABLE CARRITO Y TOTAL****************************************************************
let carrito = [];
let total = 0;

// SELECCIÓN DE LOS ELEMENTOS DE HTML***************************************************************************
const productosCarrito = document.querySelector(".productos-carrito");
const totalCarrito = document.querySelector(".total-carrito");
const botonLimpiarCarrito = document.querySelector(".limpiar-carrito");

// FUNCION PARA DESPLEGAR EL CARRITO **************************************************************************
function mostrarCarrito() {
  // LIMPIAR EL CARRITO DE PRODUCTOS **************************************************************************
  productosCarrito.innerHTML = "";

  // RECORRER EL CARRITO Y CREAR UN ELEMENTO LI PARA CADA ARTICULO ********************************************
  carrito.forEach(producto => {
    const li = document.createElement("li");
    li.innerText = `${producto.nombre} - $${producto.precio}`;
    productosCarrito.appendChild(li);
  });

  //  ACTUALIZAR EL TOTAL DE PRODUCTOS ************************************************************************
  totalCarrito.innerText = `$${total.toFixed(2)}`;
}

// FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO ****************************************************************
function agregarProductoCarrito(id) {
  // UTILIZAR EL FIND PARA ENCONTRAR EL ID ********************************************************************
  const producto = productos.find(producto => producto.id === id);

  // AGREGAR EL PRODUCTO AL CARRITO ***************************************************************************
  carrito.push(producto);

  // ACTUALIZAR EL TOTAL **************************************************************************************
  total += producto.precio;

  // MOSTRAR LOS ARTICULOS DEL CARRITO ************************************************************************
  mostrarCarrito();
}

// FUNCION LIMPIAR EL CARRITO *********************************************************************************
function limpiarCarrito() {
  // ELIMINAR TODOS LOS ARTICULOS DEL CARRITO Y VOLVER EL TOTAL A 0 *******************************************
  carrito = [];
  total = 0;

  // MOSTRAR LOS ARTICULOS DEL CARRITO ************************************************************************
  mostrarCarrito();
}

// AGREGAR EVENT LISTENERS AL BOTON AGREGAR PRODUCTO **********************************************************
const botonAgregarAlCarrito = document.querySelectorAll(".agregar-carrito");
botonAgregarAlCarrito.forEach(boton => {
  boton.addEventListener("click", event => {
    const id = parseInt(event.target.dataset.id);
    agregarProductoCarrito(id);
  });
});

// AGREGAR EVENT LISTENER AL BOTON LIMPIAR CARRITO ***********************************************************
botonLimpiarCarrito.addEventListener("click", limpiarCarrito);
