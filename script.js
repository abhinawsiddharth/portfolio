// Smooth scrolling for nav links with header offset
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle (unchanged)
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.background = '#00aaff';
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});