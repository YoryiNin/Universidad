document.addEventListener('DOMContentLoaded', () => {
    // Animación del título
    const tituloHero = document.querySelector('.hero-content h1');
    setTimeout(() => {
        tituloHero.classList.add('active'); // Activamos la animación
    }, 300); // Pequeño retraso

    // Modo oscuro
    const botonModo = document.getElementById('modoOscuroBtn');
    botonModo.addEventListener('click', () => {
        botonModo.classList.toggle('rotate');
        document.body.classList.toggle('oscuro');
    });
});
