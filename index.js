document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-contact');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (form && confirmationMessage) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                return;
            }

            event.preventDefault();
            confirmationMessage.textContent = 'Votre commande a ete effectuée avec succes';
            confirmationMessage.classList.add('visible');

            form.reset();
            form.querySelector('#nom').focus();
        });
    }

    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length) {
        const currentUrl = window.location.pathname.toLowerCase();
        navLinks.forEach(link => {
            const href = link.getAttribute('href').toLowerCase();
            if (href.includes(currentUrl.split('/').pop())) {
                link.classList.add('active');
            }
        });
    }

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.carte img').forEach(img => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalCaption.textContent = img.alt;
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});

