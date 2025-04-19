function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  }
  
function toggleFormModal() {
  const formModal = document.getElementById('formModal');
  formModal.style.display = formModal.style.display === 'flex' ? 'none' : 'flex';
}

function handleSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('submitButton');
  
  // Verificar que todos los campos estén llenos
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      input.nextElementSibling.style.display = 'block';
      isValid = false;
    } else {
      input.classList.remove('error');
      input.nextElementSibling.style.display = 'none';
    }
  });
  
  if (isValid) {
    // Cambiar el texto del botón
    submitButton.textContent = 'Gracias por tu mensaje';
    submitButton.disabled = true;
    
    // Opcional: cerrar el modal después de un tiempo
    setTimeout(() => {
      toggleFormModal();
      // Resetear el formulario y el botón después de cerrar
      setTimeout(() => {
        form.reset();
        submitButton.textContent = 'Enviar';
        submitButton.disabled = false;
      }, 500);
    }, 2000);
  }
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  const formModal = document.getElementById('formModal');
  const modal = document.getElementById('modal');
  
  if (event.target === formModal) {
    formModal.style.display = 'none';
  }
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
  