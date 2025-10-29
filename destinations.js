// Destination navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        const exploreBtn = card.querySelector('.explore-more');
        const destination = card.getAttribute('data-destination');
        
        if (exploreBtn && destination) {
            exploreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                navigateToDestination(destination);
            });
        }
        
        // Optional: Make entire card clickable
        card.addEventListener('click', function() {
            if (destination) {
                navigateToDestination(destination);
            }
        });
    });
});

function navigateToDestination(destination) {
    // Map destination names to HTML files
    const destinationPages = {
        'kashmir': 'kashmir.html',
        'goa': 'goa.html',
        'darjeeling': 'darjeeling.html',
        'rajasthan': 'rajasthan.html',
        'northsikkim': 'northsikkim.html'
    };
    
    const page = destinationPages[destination];
    if (page) {
        window.location.href = page;
    } else {
        console.error('Destination page not found:', destination);
    }
}

// Add smooth scroll for navigation links
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add floating particles effect on hover
document.querySelectorAll('.destination-card').forEach(card => {
    const particles = card.querySelector('.floating-particles');
    
    card.addEventListener('mouseenter', function() {
        createParticles(particles);
    });
});

function createParticles(container) {
    // Clear existing particles
    container.innerHTML = '';
    
    // Create 10 random particles
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.8)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(particle);
    }
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);