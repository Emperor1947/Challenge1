// Image URLs for the slideshow
const imageUrls = [
    'images1.jpeg',
    'images2.jpeg',
    'images3.jpeg',
    'images4.jpeg',
    'images5.jpeg',
    'images6.jpeg',
    'images7.jpeg',
    'images8.jpeg'
];

// Initialize slideshow
const slides = document.querySelectorAll('.carousel-item');
slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url('${imageUrls[index]}')`;
});

let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);

// Create floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Animated text message
const message = "Hey there, I like to travel but little bit confused. Could you help me to find some places?";
const words = message.split(' ');
const animatedTextElement = document.getElementById('animatedText');
const exploreBtn = document.getElementById('exploreBtn');

let wordIndex = 0;

function animateWords() {
    if (wordIndex < words.length) {
        const span = document.createElement('span');
        span.textContent = words[wordIndex];
        span.style.animationDelay = `${wordIndex * 0.08}s`;
        animatedTextElement.appendChild(span);
        wordIndex++;
        setTimeout(animateWords, 250);
    } else {
        setTimeout(() => {
            exploreBtn.style.display = 'inline-block';
        }, 600);
    }
}

// Start text animation after page loads
window.addEventListener('load', () => {
    setTimeout(animateWords, 1200);
});

// Explore button - Navigate to destinations page
const popup = document.getElementById('welcomePopup');
const navbar = document.getElementById('navbar');

exploreBtn.addEventListener('click', () => {
    popup.classList.add('hide');
    setTimeout(() => {
        navbar.classList.add('show');
    }, 400);
    
    // Navigate to destinations page after animation
    setTimeout(() => {
        window.location.href = 'destinations.html';
    }, 1200);
});

// Add ripple effect to button
exploreBtn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});