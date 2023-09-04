/* formulario */ /* FUNCIONA PREFECTAMENT */

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'SENDING...';

   const serviceID = 'default_service';
   const templateID = 'template_vf3d2tj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'SUBMIT MESSAGE';
      alert('SENT!');
    }, (err) => {
      btn.value = 'SUBMIT MESSAGE';
      alert(JSON.stringify(err));
    });
});