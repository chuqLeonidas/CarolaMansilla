// ==========================================================================
// LÓGICA DE CONTROL PARA LA NAVBAR INTERACTIVA
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .btn-nav-cta');

    // Función para alternar el estado del menú móvil
    const toggleMenu = () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
        
        // Accesibilidad: Actualiza el estado del lector de pantalla
        navToggle.setAttribute('aria-expanded', !isExpanded);
    };

    // Evento de clic en el botón hamburguesa
    navToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace (Scroll suave)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo ejecuta el cierre si el menú móvil está visible actualmente
            if (navMenu.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });
});