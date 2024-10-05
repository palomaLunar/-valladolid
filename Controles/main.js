const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Obtener los valores de los campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value; 


  // Validación básica (puedes agregar más validaciones)
  if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Aquí puedes enviar los datos del formulario a un servidor usando fetch, XMLHttpRequest o una librería como Axios
  // Ejemplo con fetch:
  fetch('tu-endpoint-para-enviar-datos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    if (response.ok) {
      alert('Mensaje  
 enviado correctamente.');
      // Limpiar el formulario
      form.reset();
    } else {
      alert('Error al enviar el mensaje. Por favor, intenta más tarde.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});