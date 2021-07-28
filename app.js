'use strict';

function verificacion() {
   const display = document.querySelector('.input-numbers');
   const contenidoDisplay = display.value;

   // mover el contenido del display a un array
   const numeros = [];
   for (let i = 0; i <= contenidoDisplay.length - 1; i++) {
      numeros.push(display.value[i]); 
   }

   // validar el numero
   if (! Number.isInteger(parseFloat(contenidoDisplay))) {
      mostrarMensaje('El numero no es entero');
      return;
   }
   if (contenidoDisplay.length < 6) {
      mostrarMensaje('El numero es menor a 6 digitos o no es un numero');
      return;
   }
   if (numeros.some(numerosRepetidos)) {
      mostrarMensaje('El numero tinene numeros repetidos');
      return;
   }

   mostrarMensaje('El numero cumple con todas las reglas', 'valido');
}

// encontrar numeros repetidos en el array
function numerosRepetidos(valor, indice, lista) {
   return !(lista.indexOf(valor) == indice);
}

function mostrarMensaje(mensaje, tipo = null) {
   const contenidoApp = document.querySelector('.contenido');
   const contendorMensaje = document.createElement('P');
   
   contendorMensaje.textContent = mensaje;
   if (!tipo) {
      contendorMensaje.classList.add('error');
   }
   if (tipo) {
      contendorMensaje.classList.add('valido');
   }
   contenidoApp.appendChild(contendorMensaje);

   setTimeout(() => {
      contendorMensaje.remove();
   }, 1000)
}

