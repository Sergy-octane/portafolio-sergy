
// Obtener el botón
const botonVolverArriba = document.getElementById("btn-volver-arriba");

// Cuando el usuario haga scroll, muestra el botón
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        botonVolverArriba.style.display = "block";
    } else {
        botonVolverArriba.style.display = "none";
    }
};

// Cuando el usuario haga clic en el botón, regresa al inicio de la página
botonVolverArriba.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});