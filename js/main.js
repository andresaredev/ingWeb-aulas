import routes from "./routes.js";

document.addEventListener("DOMContentLoaded", () => {
    inicializarRutas();
    cargarRutaActual();
});

function inicializarRutas() {
    document.getElementById("homeLink").addEventListener("click", (e) => navegarA(e, "/"));
    document.getElementById("aboutLink").addEventListener("click", (e) => navegarA(e, "/about"));
    document.getElementById("contactLink").addEventListener("click", (e) => navegarA(e, "/contact"));
    window.addEventListener("popstate", cargarRutaActual);
}

function navegarA(event, ruta) {
    event.preventDefault();
    window.history.pushState({}, "", ruta);
    cargarRutaActual();
}

async function cargarRutaActual() {
    const ruta = window.location.pathname;
    const app = document.getElementById("app");

    const archivoHtml = routes[ruta] || routes["404"];

    try {
        const respuesta = await fetch(archivoHtml);
        if (respuesta.ok) {
            const contenido = await respuesta.text();
            app.innerHTML = contenido;
        } else {
            app.innerHTML = "<h1>Error al cargar la página</h1><p>No se pudo encontrar el contenido solicitado.</p>";
        }
    } catch (error) {
        app.innerHTML = "<h1>Error de conexión</h1><p>No se pudo cargar el contenido.</p>";
    }
}
