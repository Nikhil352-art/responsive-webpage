function toggleMenu() {
    const menu = document.getElementById('leftMenu');
    menu.classList.toggle('collapsed');
}

function adjustPageScale() {
    const applyScale = () => {
        const screenWidth = window.innerWidth;
        const body = document.body;

        if (screenWidth >= 992 && screenWidth <= 1600) {
            body.style.transform = 'scale(0.9)';
            body.style.transformOrigin = 'top left';
        } else if (screenWidth >= 700 && screenWidth < 767) {
            body.style.transform = 'scale(0.8)';
            body.style.transformOrigin = 'top left';
        } else if (screenWidth >= 600 && screenWidth < 700) {
            body.style.transform = 'scale(0.75)';
            body.style.transformOrigin = 'top left';
        } else if (screenWidth <= 600) {
            body.style.transform = 'scale(0.5)';
            body.style.transformOrigin = 'top left';
        } else {
            // Reset scaling for larger screens
            body.style.transform = '';
            body.style.transformOrigin = '';
        }
    };

    // Initial scale application
    applyScale();

    // Update scaling on window resize
    window.addEventListener('resize', applyScale);
}

// Call the function to activate the scaling adjustments
adjustPageScale();