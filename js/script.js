document.addEventListener('DOMContentLoaded', () => {
    const nsfwBlock = document.getElementById('nsfwBlock');

    if (!nsfwBlock) return;

    // Detecta la sección NSFW para cambiar el ambiente visual de forma fluida
    const observerOptions = {
        root: null,
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Activa la luz sombría roja
                document.body.classList.add('nsfw-mode');
            } else {
                // Restaura los tonos púrpura/azul ciber
                document.body.classList.remove('nsfw-mode');
            }
        });
    }, observerOptions);

    observer.observe(nsfwBlock);
});
