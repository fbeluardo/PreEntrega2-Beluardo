// EJEMPLO N° 1 - PRECIO FINAL CON IVA Y CON DESCUENTO EN PESOS ARGENTINOS//
// const VALOR_IVA = 0.21;

// const PRODUCTO = prompt("Ingresa el nombre del producto");
// const PRECIO = prompt("Ingresa el precio del producto");
// const DESCUENTO_PESOS = prompt ("Ingrese el descuento del producto en pesos argentinos")
// const TOTAL = (PRECIO - DESCUENTO_PESOS) * (1 + VALOR_IVA);

// const PRECIO_FINAL =
//   "El precio final de los " + PRODUCTO + " es de: $" + TOTAL + " pesos argentinos";

// alert(PRECIO_FINAL);

// const PRECIO = prompt("Ingresa el precio del producto");
// const PORCENTAJE = prompt ("Ingrese el descuento en porcentaje")
// function DESCUENTO (PRECIO,PORCENTAJE) {
//     console.log (DESCUENTO)
// }

//EJEMPLO N° 2 - EDADES Y PROMEDIO DE EDAD DE USUARIOS - SITIO WEB DE CERVECERIA QUILMES//

let suma = 0;

for (let i = 0; i < 4; i++) { 
    const anioDeNacimiento = parseInt(prompt("Ingresar año de nacimiento del usuario " + (i+1)));
    const edad = 2023 - anioDeNacimiento;
    suma += edad; 
    if (edad <18) {
        alert ("USTED NO PUEDE ACCEDER AL SITIO WEB");}
    else{
        alert ("USTED PUEDE ACCEDER AL SITIO WEB");}
}
const promedio = parseInt(suma / 4);
alert("El promedio de las 4 edades es de " + promedio)

function saludar (){
    document.write ("Muchas gracias por la visita!")
}
saludar ()



















