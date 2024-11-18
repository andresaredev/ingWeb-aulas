// Función para inicializar el pop-up de cierre de sesión
function initializeLogoutPopup(logoutButtonId, popupId, cancelButtonId, confirmButtonId) {
  
  const logoutButton = document.getElementById(logoutButtonId);
  const logoutPopup = document.getElementById(popupId);
  const cancelButton = document.getElementById(cancelButtonId);
  const confirmLogoutButton = document.getElementById(confirmButtonId);

  if (!logoutButton || !logoutPopup || !cancelButton || !confirmLogoutButton) {
    console.error('No se encontraron los elementos necesarios para inicializar el pop-up.');
    return;
  }

  // Mostrar el pop-up al hacer clic en "Cerrar Sesión"
  logoutButton.addEventListener('click', () => {
    logoutPopup.style.display = 'flex';
  });

  // Ocultar el pop-up al hacer clic en "Cancelar"
  cancelButton.addEventListener('click', () => {
    logoutPopup.style.display = 'none';
  });

  // Redirigir al usuario al hacer clic en "Cerrar sesión"
  confirmLogoutButton.addEventListener('click', () => {
    window.location.href = '/Pages/home/index.html'; // Cambia la ruta según tu estructura
  });
}

// Carga el pop-up de cierre de sesión
async function loadPopup() {
  const response = await fetch('../../Pages/LogOut/popup.html'); 
  const popupHTML = await response.text();
  document.getElementById('popupContainer').innerHTML = popupHTML;

  // Inicializa el comportamiento del pop-up
  initializeLogoutPopup('logoutButton', 'logoutPopup', 'cancelButton', 'confirmLogoutButton');
}

loadPopup();

