// EMPLEADOS DE LA CERVECERIA - TOTAL DE EMPLEADOS DE LA EMPRESA

class Empleado {
   constructor(nombreEmpleado, edadEmpleado, cargoEmpleado, salarioNeto, antiguedadAnios) {
     this.nombreEmpleado = nombreEmpleado;
     this.edadEmpleado = edadEmpleado;
     this.cargoEmpleado = cargoEmpleado;
     this.salarioNeto = salarioNeto;
     this.antiguedadAnios = antiguedadAnios;
   }
  }
  function ingresoEmpleados () {
    let numeroEmpleados = parseInt (
      prompt ("Cuantos empleados tiene la empresa?")
    )
    let empleados = [];
    for (let index = 0; index < numeroEmpleados; index++) {
    let nombreEmpleado = prompt("Ingrese su nombre completo");
    let edadEmpleado = prompt("Ingrese su edad");
    let cargoEmpleado = prompt("Ingrese su cargo en la Cerveceria Bariloche");
    let salarioNeto = prompt("Ingrese su salario neto en la Cerveceria Bariloche");
    let antiguedadAnios = prompt("Ingrese su antigüedad en la Cerveceria Bariloche");
    let ingresoEmpleados = new Empleado(
    nombreEmpleado,
    edadEmpleado,
    cargoEmpleado,
    salarioNeto,
    antiguedadAnios);
    empleados.push(ingresoEmpleados);}
    }
    ingresoEmpleados()
    
    function promedioSalarioEmpleados (empleados) 
    let 
 


 
//  function calcularCosto(productos) {
//    let sumatoriaCosto = 0;
//    for (const producto of productos) {
//      sumatoriaCosto += producto.calcularCosto();
//    }
//    return sumatoriaCosto;
//  }
 
//  function main() {
//    let productos = agregarProductos();
//    mostrarProductos(productos);
//    let costoAlmacen = calcularCosto(productos);
//    alert("El costo total del almacén es: " + costoAlmacen);
//  }
 
//  main();
 