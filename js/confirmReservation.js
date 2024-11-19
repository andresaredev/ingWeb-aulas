document.addEventListener("DOMContentLoaded", () => {
  const aulasTable = document
    .getElementById("aulasTable")
    .querySelector("tbody");
  const selectedClassroomContainer =
    document.getElementById("selectedClassroom");

  // Ejemplo de datos dinámicos (puedes reemplazar esto con tu lógica de datos)
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

  // Función para renderizar las aulas en la tabla
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

      // Añadir evento al botón
      const addButton = row.querySelector(".add-button");
      addButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar recarga de la página
        seleccionarAula(aula);
      });

      aulasTable.appendChild(row);
    });
  }

  // Función para mostrar el aula seleccionada
  function seleccionarAula(aula) {
    selectedClassroomContainer.innerHTML = `
  <h4>Aula Seleccionada:</h4>
  <p><strong>Nombre:</strong> ${aula.nombre}</p>
  <p><strong>Capacidad:</strong> ${aula.capacidad} estudiantes</p>
`;
  }

  // Inicializar la tabla con datos
  renderAulas();
});
