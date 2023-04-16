// DEFINICION DE VARIABLES / PRODUCTOS *************************************************************************
const productos = [
  {
    id: 1,
    nombre: "Alcohol 96° 1000 ml Porta",
    precio: 200
  },
  {
    id: 2,
    nombre: "Alcohol 70° 5000 ml Porta",
    precio: 2000
  },
  {
    id: 3,
    nombre: "Alcohol 96° 250 ml Aerosol",
    precio: 1000
  }
];

// INICIALIZACIÓN DE LA VARIABLE CARRITO Y TOTAL****************************************************************
let carrito = [];
let total = 0;

// IDENTIFICACIÓN DEL USUARIO CON SU NOMBRE ********************************************************************
let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let textoUsuario;

function Identificacion(){
  formularioIdentificacion = document.getElementById(
    "formularioIdentificacion"
  );
  inputUsuario = document.getElementById("inputUsuario");
  contenedorIdentificacion = document.getElementById(
    "contenedorIdentificacion"
  );
  contenedorUsuario = document.getElementById("contenedorUsuario");
  textoUsuario = document.getElementById("textoUsuario");
}
formularioIdentificacion.onsubmit = (event) => identificarUsuario(event);

// SELECCIÓN DE LOS ELEMENTOS DE HTML***************************************************************************
const productosCarrito = document.querySelector(".productos-carrito");
const totalCarrito = document.querySelector(".total-carrito");
const botonLimpiarCarrito = document.querySelector(".limpiar-carrito");

window.onload = function() {
  // CARGAR LOS DATOS CARRITO DESDE EL LOCALSTORAGE*************************************************************
  const articulosCarritoStock = localStorage.getItem('productosCarrito');
  const articulosCarritoTotalStock = localStorage.getItem('totalCarrito');

  if (articulosCarritoStock) {
    carrito = JSON.parse(articulosCarritoStock);
    total = parseFloat(articulosCarritoTotalStock);
    mostrarCarrito();
  }
}

// FUNCION PARA MOSTRAR EL CARRITO **************************************************************************
function mostrarCarrito() {

// LIMPIAR EL CARRITO DE PRODUCTOS ****************************************************************************
productosCarrito.innerHTML = "";

// CREAR UN OBJETO VACÍO PARA CONTENER EL NÚMERO DE CADA PRODUCTO EN EL CARRITO********************************
const cantidades = {};

// RECORRER EL CARRITO Y ACTUALIZAR LAS CANTIDADES DE CADA PRODUCTO EN EL OBJETO*******************************
carrito.forEach(producto => {
      if (producto.nombre in cantidades) {
        cantidades[producto.nombre]++;
      } else {
        cantidades[producto.nombre] = 1;
      }
});
  
// CREAR UN ELEMENTO LI PARA CADA PRODUCTO EN EL OBJETO Y AGREGARLO AL CARRITO*********************************
for (const nombreProducto in cantidades) {
  const cantidad = cantidades[nombreProducto];
  const precio = productos.find(producto => producto.nombre === nombreProducto).precio;
  const li = document.createElement("li");
  li.innerText = `${cantidad} x ${nombreProducto} - $${(cantidad * precio).toFixed(2)}`;
  productosCarrito.appendChild(li);
}

  //  ACTUALIZAR EL TOTAL DE PRODUCTOS ************************************************************************
  totalCarrito.innerText = `$${total.toFixed(0)}`;

  // GUARDAR LA INFORMACION DEL CARRITO ACTUALIZADA AL LOCALSTORAGE********************************************
  localStorage.setItem('productosCarrito', JSON.stringify(carrito));
  localStorage.setItem('totalCarrito', total.toFixed(0));
}

// FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO ****************************************************************
function agregarProductoCarrito(id) {
  // UTILIZAR EL FIND PARA ENCONTRAR EL ID ********************************************************************
  const producto = productos.find(producto => producto.id === id);

  // AGREGAR EL PRODUCTO AL CARRITO ***************************************************************************
  carrito.push(producto);

  // GUARDAR LA INFORMACION ACTUALIZADA AL LOCALSTORAGE********************************************************
  localStorage.setItem('productosCarrito', JSON.stringify(carrito));
  localStorage.setItem('totalCarrito', total.toFixed(0));

  // ACTUALIZAR EL TOTAL **************************************************************************************
  total += producto.precio;

  // MOSTRAR LOS ARTICULOS DEL CARRITO ************************************************************************
  mostrarCarrito();
}

// FUNCION LIMPIAR EL CARRITO *********************************************************************************
function limpiarCarrito() {
  // ELIMINAR TODOS LOS ARTICULOS DEL CARRITO Y ACTUALIZAR EL TOTAL A 0 *******************************************
  carrito = [];
  total = 0;

  // MOSTRAR LOS ARTICULOS DEL CARRITO ************************************************************************
  mostrarCarrito();
  // BORRAR LA INFORMACION DEL CARRITO EN EL LOCALSTORAGE******************************************************
  localStorage.removeItem('productosCarrito');
  localStorage.removeItem('totalCarrito');
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

// VINCULAR EL BOTON DE FINALIZAR COMPRA CON EL HTML *********************************************************
const finalizarCompraBoton = document.querySelector('.finalizar_compra');

// AGREGAR UN EVENT LISTENER AL BOTON DE FINALIZAR COMPRA ****************************************************
finalizarCompraBoton.addEventListener('click', function() {
  // OBTENER LA CANTIDAD TOTAL DE COMPRA *********************************************************************
  const total = document.querySelector('.total-carrito').textContent;
  
  // MOSTRAR AL USUARIO UN MENSAJE CON EL TOTAL DEL MONTO A PAGAR CON SWEET ALERT ****************************
  const mensajeConfirmacion = `El total de su pedido es de ${total}.`;

Swal.fire({
  title: '¡Gracias por su compra!',
  text: mensajeConfirmacion,
  icon: 'success'
});
  
  // RESETEAR EL CARRITO BORRANDO LOS ARTICULOS Y ACTUALIZANDO EL TOTAL DEL MONTO A PAGAR *******************
  const productosCarrito = document.querySelector('.productos-carrito');
  productosCarrito.innerHTML = '';
  document.querySelector('.total-carrito').textContent = '$0';
});








