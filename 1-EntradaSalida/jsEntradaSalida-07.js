/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let suma;   
	
	//levanto datos caja de texto

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero2 = parseInt(numero2);
	
	//realizo la operacion

	suma = numero1 + numero2;

	//muestro el resultado

	alert("La suma es " + suma);	
}

function restar()
{
	let numero1;
	let numero2;
	let resta;   
	
	//levanto datos caja de texto

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero2 = parseInt(numero2);
	
	//realizo la operacion

	resta = numero1 - numero2;

	//muestro el resultado

	alert("La resta es " + resta);
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let producto;   
	
	//levanto datos caja de texto

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero2 = parseInt(numero2);
	
	//realizo la operacion

	producto = numero1 * numero2;

	//muestro el resultado

	alert("El producto es " + producto);
}

function dividir()
{
	let numero1;
	let numero2;
	let division;   
	
	//levanto datos caja de texto

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
    numero2 = parseInt(numero2);
	
	//realizo la operacion

	division = numero1 / numero2;

	//muestro el resultado

	alert("La division es " + division);
}

