document.addEventListener("DOMContentLoaded", () => {
  const aulasTable = document
    .getElementById("aulasTable")
    .querySelector("tbody");
  const selectedClassroomContainer =
    document.getElementById("selectedClassroom");
  const confirmButton = document.getElementById("nextButton");
  const selectedRoom = document.getElementById("selectedRoom");
  const confirmationPopup = document.getElementById("confirmationPopup");

  // Variable para almacenar el aula seleccionada
  let aulaSeleccionada = null;

  // Datos de ejemplo
  const aulas = [
    {
      id: 1,
      estado: "Disponible",
      capacidad: 100,
      nombre: "Auditorio A",
      tipo: "Auditorio",
    },
    {
      id: 2,
      estado: "Ocupada",
      capacidad: 50,
      nombre: "Sala B",
      tipo: "Laboratorio",
    },
    {
      id: 3,
      estado: "Disponible",
      capacidad: 80,
      nombre: "Aula 101",
      tipo: "Aula Regular",
    },
  ];

  // Renderizar aulas en la tabla
  function renderAulas() {
    aulasTable.innerHTML = "";

    aulas.forEach((aula) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${aula.id}</td>
        <td>${aula.estado}</td>
        <td>${aula.capacidad}</td>
        <td>${aula.nombre}</td>
        <td>${aula.tipo}</td>
        <td><button class="add-button" data-id="${aula.id}">Añadir</button></td>
      `;

      // Evento para el botón "Añadir"
      const addButton = row.querySelector(".add-button");
      addButton.addEventListener("click", (event) => {
        event.preventDefault();
        seleccionarAula(aula);
      });

      aulasTable.appendChild(row);
    });
  }

  // Función para mostrar el aula seleccionada
  function seleccionarAula(aula) {
    aulaSeleccionada = aula; // Guardar el aula seleccionada
    selectedClassroomContainer.innerHTML = `
      <h4>Aula Seleccionada:</h4>
      <p><strong>Nombre:</strong> ${aula.nombre}</p>
      <p><strong>Capacidad:</strong> ${aula.capacidad} estudiantes</p>
    `;
  }

  // Mostrar el popup de confirmación
  confirmButton.addEventListener("click", () => {
    if (!aulaSeleccionada) {
      alert("No ha seleccionado ninguna aula.");
      return;
    }

    // Mostrar el aula seleccionada en el popup
    selectedRoom.textContent = `Nombre: ${aulaSeleccionada.nombre}, Capacidad: ${aulaSeleccionada.capacidad}`;
    confirmationPopup.style.display = "block";
  });

  // Botón de Retroceder en el popup
  backPopupButton.addEventListener("click", () => {
    confirmationPopup.style.display = "none";
  });

  confirmPopupButton.addEventListener("click", () => {
    const date = new Date();
    const formattedDate = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    notificationText.textContent = `Su aula "${aulaSeleccionada.nombre}" fue reservada con éxito. Hora: ${formattedDate}`;
    notification.style.display = "block";

    // Ocultar el popup y mostrar la notificación
    confirmationPopup.style.display = "none";

    // Ocultar notificación después de 3 segundos
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  });

  // Inicializar la tabla
  renderAulas();
});
