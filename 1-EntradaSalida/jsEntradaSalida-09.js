/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldo;
	let aumento;
	let nuevosueldo;   
	
    sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	aumento = sueldo *0.1

	nuevosueldo = sueldo + aumento;
	document.getElementById("txtIdResultado").value = nuevosueldo;

	
}


// Estrategia de resolucion
// Declaracion de variables sueldo nuevo sueldo aumento
// Leer el sueldo
// Calculo el aumento
// Obtengo el nuevo sueldo
// Muestro el resultado