/* formulario */ /* FUNCIONA CORRECTAMENTE */

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_vf3d2tj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIANDO MENSAJE';
      alert('¡ENVIADO!');
    }, (err) => {
      btn.value = 'ENVIANDO MENSAJE';
      alert(JSON.stringify(err));
    });
});