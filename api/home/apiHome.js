// fetchAulas
export function fetchAulas() {
  return fetch("https://sgas-oot6.onrender.com/aulas_get")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error al cargar las aulas:", error);
      throw error;
    });
}

function cargarAulasEnTabla(aulas) {
    const tbody = document.getElementById('aulasTable').querySelector('tbody');
    tbody.innerHTML = ''; 

    aulas.forEach(aula => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aula.id}</td>
            <td>${aula.id_estado_aula}</td>
            <td>${aula.capacidad}</td>
            <td>${aula.nombre}</td>
            <td>${aula.id_tipo_aula}</td>
        `;
        tbody.appendChild(row);
    });
}

function cargarYConfigurarBusqueda() {
    const loader = document.getElementById("loader"); 
    loader.style.display = "block";

    fetchAulas()
        .then(responseData => {
            const aulas = responseData.data; 
            cargarAulasEnTabla(aulas); 

            const searchButton = document.getElementById("searchButton");
            const searchInput = document.getElementById("searchInput");

            searchButton.addEventListener("click", function() {
                const filter = searchInput.value.toLowerCase(); 
                const filteredAulas = aulas.filter(aula => 
                    aula.nombre.toLowerCase().includes(filter) || 
                    aula.id_tipo_aula.toLowerCase().includes(filter)
                );
                cargarAulasEnTabla(filteredAulas); 
            });
        })
        .catch(error => console.error(error)).finally(()=>{loader.style.display = "none";})
}

document.addEventListener("DOMContentLoaded", () => {
  cargarYConfigurarBusqueda();
});
