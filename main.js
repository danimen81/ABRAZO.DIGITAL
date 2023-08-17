
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


$('.box').hover(function() {
    $(this).css('background-color', '#ccc');
  }, function() {
    $(this).css('background-color', '#fff');
  });
  
 








 