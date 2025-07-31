 // Wait a moment then fade out splash
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('splashScreen').classList.add('fade-out');
      }, 2200);

      // Remove splash after fade
      setTimeout(() => {
        const splash = document.getElementById('splashScreen');
        if (splash) splash.remove();
      }, 3500);
    });

const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starsContainer.appendChild(star);
}

// Generate meteors
const meteorsContainer = document.getElementById('meteors');
for (let i = 0; i < 4; i++) {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    meteor.style.top = `${Math.random() * -500}px`;
    meteor.style.left = `${Math.random() * 100}%`;
    meteor.style.animationDelay = `${Math.random() * 7}s`;
    meteorsContainer.appendChild(meteor);
}

// Typewriter effect function
function typeWriterEffect(text, elementId, speed = 50) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    let index = 0;

    const interval = setInterval(() => {
        element.textContent += text.charAt(index);
        index++;

        if (index === text.length) {
            clearInterval(interval);
            element.classList.add('blink-cursor');
        }
    }, speed);
}
setTimeout(() => {
    typeWriterEffect("Bringing designs to life with precision and creativity.", "typeWriterText"); 
},2500)


// Mobile menu functions
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');

    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

// Function to show sections (for desktop)
function showSection(id) {
    const intro = document.querySelector('.home');
    const contentContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    const allSections = document.querySelectorAll('.section-content');
    const targetSection = document.getElementById(id);

    // Hide intro
    if (intro) {
        intro.style.display = 'none';
    }

    // Show navbar
    if (navbar) {
        navbar.style.display = 'flex';
    }

    // Show content container
    if (contentContainer) {
        contentContainer.style.display = 'flex';
    }

    // Hide all sections
    allSections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in');
    });

    // Show target section
    if (targetSection) {
        targetSection.style.display = 'flex';
        setTimeout(() => {
            targetSection.classList.add('fade-in');
        }, 50);
    }
}

// Function to show sections from mobile menu
function showSectionMobile(id) {
    showSection(id);
    closeMobileMenu();
}

// Function to show home page
function HomePage() {
    const intro = document.querySelector('.home');
    const contentContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    const allSections = document.querySelectorAll('.section-content');
    const nav_btn = document.getElementById('navLinks')
    // Close mobile menu if open
    closeMobileMenu();

    // Show intro
    if (intro) {
        intro.style.display = 'flex';
    }

    // Hide content container
    if (contentContainer) {
        contentContainer.style.display = 'none';
    }

    // Hide navbar
    if (navbar) {
        navbar.style.display = 'none';
    }

    // Hide all sections
    allSections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in');
    });
}

// Close mobile menu when clicking outside or on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});