// EMPLEADOS DE LA CERVECERIA - PROMEDIO DE SALARIO DE LOS EMPLEADOS Y FILTRADO DE LOS EMPLEADOS Q REUNEN LA CONDICION GERENTE//

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
    let cargoEmpleado = prompt("Ingrese su cargo en la Cerveceria Bariloche").toUpperCase();
    let salarioNeto = prompt("Ingrese su salario neto en la Cerveceria Bariloche");
    let antiguedadAnios = prompt("Ingrese su antigüedad en la Cerveceria Bariloche");
    let ingresoEmpleados = new Empleado(
    nombreEmpleado,
    edadEmpleado,
    cargoEmpleado,
    salarioNeto,
    antiguedadAnios);
    empleados.push(ingresoEmpleados);
  }
    return (empleados)
    }
    

    function promedioSalarioEmpleados(empleados) {
      const salarios = empleados.map((empleado) => parseFloat(empleado.salarioNeto)).filter((salario) => !isNaN(salario));
      const totalSalarios = salarios.reduce((total, salario) => total + salario, 0);
      const promedioSalarios = totalSalarios / salarios.length;
      return promedioSalarios;
    }
    let empleados = ingresoEmpleados();
    let promedioSalarios = promedioSalarioEmpleados(empleados);
    console.log(`El promedio de salarios de los empleados es ${promedioSalarios}`);

    let cargoFiltrado = prompt("Ingrese el cargo jerarquico de empleado a filtrar").toUpperCase();
    let empleadosFiltrados = empleados.filter(empleado => empleado.cargoEmpleado === cargoFiltrado);
    console.log(`Los empleados con el cargo ${cargoFiltrado} son: ${empleadosFiltrados.map(empleado => empleado.nombreEmpleado).join(", ")}`);

    
   



