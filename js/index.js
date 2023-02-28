
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



















