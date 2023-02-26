//PRECIO FINAL CON IVA Y CON DESCUENTO EN PESOS ARGENTINOS//
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

//EDADES Y PROMEDIO DE EDAD DE USUARIOS - USUARIOS SITIO WEB DE CERVECERIA QUILMES//

const USUARIO_UNO = parseInt(prompt("Ingresar año de nacimiento del primer usuario"));
const USUARIO_DOS = parseInt(prompt("Ingresar año de nacimiento del segundo usuario"));
const USUARIO_TRES = parseInt(prompt("Ingresar año de nacimiento del tercer usuario"));
const USUARIO_CUATRO = parseInt(prompt("Ingresar año de nacimiento del cuarto usuario"));
const ANIO_ACTUAL = 2023

const EDAD_UNO = ANIO_ACTUAL - USUARIO_UNO
if (EDAD_UNO <18) {
alert ("USTED NO PUEDE ACCEDER AL SITIO WEB");}
else{
alert ("USTED PUEDE ACCEDER AL SITIO WEB");}
const EDAD_DOS = ANIO_ACTUAL - USUARIO_DOS
if (EDAD_DOS <18) {
alert ("USTED NO PUEDE ACCEDER AL SITIO WEB");}
    else{
alert ("USTED PUEDE ACCEDER AL SITIO WEB");}
const EDAD_TRES = ANIO_ACTUAL - USUARIO_TRES
if (EDAD_TRES <18) {
alert ("USTED NO PUEDE ACCEDER AL SITIO WEB");}
    else{
alert ("USTED PUEDE ACCEDER AL SITIO WEB");}
const EDAD_CUATRO = ANIO_ACTUAL - USUARIO_CUATRO
if (EDAD_CUATRO <18) {
alert ("USTED NO PUEDE ACCEDER AL SITIO WEB");}
    else{
alert ("USTED PUEDE ACCEDER AL SITIO WEB");}

alert (EDAD_UNO)
alert (EDAD_DOS)
alert (EDAD_TRES)
alert (EDAD_CUATRO)

//for (let index = 1; index <= 4; index++) {
//alert (index)
//}

SUMATORIA = EDAD_UNO + EDAD_DOS + EDAD_TRES + EDAD_CUATRO
PROMEDIO = parseInt(SUMATORIA / 4)
alert (PROMEDIO)

function sumarEdades(EDAD_UNO, EDAD_DOS, EDAD_TRES, EDAD_CUATRO) {
    let sumatoria = EDAD_UNO + EDAD_DOS + EDAD_TRES + EDAD_CUATRO;
    return sumatoria;
}
function mostrarPromedio() {
    let resultadoSumatoria = sumarEdades(EDAD_UNO, EDAD_DOS, EDAD_TRES, EDAD_CUATRO);
    let promedio = parseInt(resultadoSumatoria / 4);
    alert("El promedio es: " + promedio);
    }
    mostrarPromedio();













