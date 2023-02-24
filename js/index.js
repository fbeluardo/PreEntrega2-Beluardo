//DECLARACIÓN Y ASIGNACIÓN DE VARIABLES

// IMPUESTOS IVA

const VALOR_IVA =0.21

const PRODUCTO = prompt("Ingresa el nombre del producto")
const PRECIO = prompt("Ingresa el precio del producto")

const TOTAL = PRECIO * (1 + VALOR_IVA)

const FRASE = "El valor del producto " + PRODUCTO + " es de: $" + TOTAL + " pesos."

alert(FRASE)

// OPERADORES Y CONDICIONALES


// CICLOS E ITERACIONES

for(let main = 1; main <= 5; main ++){
    console.log (main)

}