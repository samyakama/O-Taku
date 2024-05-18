document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Supprimer la classe "clicked" de tous les liens
            navLinks.forEach(function(link) {
                link.classList.remove('clicked');
            });
            // Ajouter la classe "clicked" au lien cliqué
            this.classList.add('clicked');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    
    // Ajout du style d'animation directement via JavaScript
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .banner {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .banner.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Ajout de la classe pour déclencher l'animation après le chargement de la page
    setTimeout(() => {
        banner.classList.add('animate');
    }, 200);  // délai de 100ms pour garantir l'application de la classe
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const banner = document.getElementById('banner');
    
    // Ajout du style d'animation directement via JavaScript
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        header, .banner {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }
        header.animate, .banner.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Ajout de la classe pour déclencher l'animation après le chargement de la page
    setTimeout(() => {
        header.classList.add('animate');
        banner.classList.add('animate');
    }, 200);  // délai de 100ms pour garantir l'application de la classe
});
