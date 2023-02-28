
//EJEMPLO N° 1 - EDADES Y PROMEDIO DE EDAD DE USUARIOS - SITIO WEB CERVECERIA//

let suma = 0;

for (let i = 0; i < 4; i++) { 
    const anioDeNacimiento = parseInt(prompt("Por favor ingrese año de nacimiento del usuario " + (i+1)));
    const edad = 2023 - anioDeNacimiento;
    suma += edad; 
    if (edad <18) {
        alert ("Usted no puede acceder al Sitio Web");}
    else{
        alert ("Usted puede acceder al Sitio Web");}
}
const promedio = parseInt(suma / 4);
alert("El promedio de las 4 edades es de " + promedio)

function paisOrigen () {
const PAIS = prompt("Ingrese su país de origen");
if (PAIS == "Argentina"){
alert("Bienvenido!");} 
else {
alert("No se le permite el ingreso");
}
}
paisOrigen();

function saludar (){
    document.write ("Muchas gracias por la visita!")
}
saludar ()



















