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

// ==========================================================================
// LÓGICA DE CONTROL PARA EL ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const currentContent = this.nextElementSibling;
            const isOpen = currentItem.classList.contains('is-open');

            // [OPCIONAL] Cerrar todos los demás elementos abiertos (Efecto acordeón estricto)
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem && item.classList.contains('is-open')) {
                    item.classList.remove('is-open');
                    item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
                    
                    const content = item.querySelector('.faq-content');
                    content.style.maxHeight = null;
                    content.setAttribute('aria-hidden', 'true');
                }
            });

            // Alternar estado del elemento actual
            if (isOpen) {
                currentItem.classList.remove('is-open');
                this.setAttribute('aria-expanded', 'false');
                currentContent.style.maxHeight = null;
                currentContent.setAttribute('aria-hidden', 'true');
            } else {
                currentItem.classList.add('is-open');
                this.setAttribute('aria-expanded', 'true');
                
                // Cálculo dinámico de la altura total del contenido interno (con padding incluido)
                currentContent.style.maxHeight = currentContent.scrollHeight + "px";
                currentContent.setAttribute('aria-hidden', 'false');
            }
        });
    });
});