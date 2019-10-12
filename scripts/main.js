
/*
// OBTIENE LA ETIQUETE H1 DEL DOCUMENTO HTML
var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hola Mundo !';


// CONDICIONALES
var carrera = 'sistemas';

if (carrera === 'sistemas'){

  alert('ing de sistemas : ' + multiplicacion(5,7));
}else {

  alert('...ups.......error' + multiplicacion(4,8));
}

function multiplicacion(num1,num2) {
  return num1 * num2;
}


// EVENTOS
document.querySelector('html').onclick = function() {
  alert('deja de pinchar la página !!!!');
}



// CAMBIA LA IMAGEN CUANDO LE DAS UN CLICK SOBRE ELLA
 var miImage = document.querySelector('img');

 miImage.onclick = function () {

   var miSrc = miImage.gettAttribute('src');
   if (miSrc === 'images/image01.png'){
     miImage.setAttribute('src','images/image02.png');
     alert(miImage);
   }else{
     miImage.setAttribute('src','images/image01.png');
   }
  }
*/

// USAR LA API localStorage
var miBoton  = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
  var miNombre = prompt('por favor ingresa tu nombre');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Mozilla es fresco!!!  :' + miNombre;
}

//

if(!localStorage.getItem('nombre')){
  estableceNombreUsuario();
}else{
  var nombreALmacenado =localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla.. es fresco xd xd... :' + nombreALmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
}


//
