
const passwordLink = document.getElementById('passwordLink');

passwordLink.addEventListener('click', () => {
const enteredPassword = prompt('Ingresa la contraseña Para Realizar Modificaciones al Contenido :');
if (enteredPassword === 'alzarme') { 
    alert('Contraseña correcta. Bienvenido.');
} else {
    alert('Contraseña incorrecta. Acceso denegado.');
    }
    return;
});
// This code will change the color of the boxes when the mouse is hovered over them.

$('.box').hover(function() {
    $(this).css('background-color', '#ccc');
  }, function() {
    $(this).css('background-color', '#fff');
  });
  
  // This code will open a new page when a box is clicked.
  
  //$('.box a').click(function() {
  //  window.location = $(this).attr('href');
  //});
  








 