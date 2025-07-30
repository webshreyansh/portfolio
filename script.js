// Generate stars
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
    element.textContent = ''; // Clear any existing content
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

// Initialize typewriter effect
typeWriterEffect("Bringing designs to life with precision and creativity.", "typeWriterText");

// Function to show sections
function showSection(id) {
    console.log('showSection called with id:', id); // Debug log

    const intro = document.querySelector('.home');
    const contentContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    const allSections = document.querySelectorAll('.section-content');
    const targetSection = document.getElementById(id);

    console.log('Elements found:', {
        intro: !!intro,
        contentContainer: !!contentContainer,
        navbar: !!navbar,
        targetSection: !!targetSection
    }); // Debug log

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

// Function to show home page
function HomePage() {
    console.log('HomePage called'); // Debug log

    const intro = document.querySelector('.home');
    const contentContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    const allSections = document.querySelectorAll('.section-content');

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