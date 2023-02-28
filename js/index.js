
//EJEMPLO N° 1 - EDADES Y PROMEDIO DE EDAD DE USUARIOS - SITIO WEB DE CERVECERIA QUILMES//

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

function InicioSesionPais () {
const PAIS = prompt("Ingresa tu país de origen?");
if (PAIS == "Argentina"){
alert("Bienvenido!");} 
else {
alert("No se le permite el ingreso");
}
}
InicioSesionPais();

function saludar (){
    document.write ("Muchas gracias por la visita!")
}
saludar ()



















