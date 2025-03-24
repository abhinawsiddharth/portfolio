// Smooth scrolling with header offset
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
        if (window.innerWidth <= 768) {
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});

// Dark mode toggle button
const toggleButton = document.createElement('button');
toggleButton.className = 'toggle-dark-mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Profile Photo Modal
const profilePhoto = document.getElementById('profile-photo');
const modal = document.getElementById('photo-modal');
const closeModal = document.getElementById('close-modal');

profilePhoto.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});