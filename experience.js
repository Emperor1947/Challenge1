// Get DOM elements
const openExperienceBtn = document.getElementById('openExperienceBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const experiencePopup = document.getElementById('experiencePopup');
const experienceForm = document.getElementById('experienceForm');
const successPopup = document.getElementById('successPopup');
const successCloseBtn = document.getElementById('successCloseBtn');

// Star rating elements
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');

// Open experience popup
openExperienceBtn.addEventListener('click', function() {
    experiencePopup.classList.add('show');
    document.body.style.overflow = 'hidden';
});

// Close experience popup
closePopupBtn.addEventListener('click', function() {
    experiencePopup.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close popup when clicking outside
experiencePopup.addEventListener('click', function(e) {
    if (e.target === experiencePopup) {
        experiencePopup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Star rating functionality
let currentRating = 0;

stars.forEach(star => {
    // Hover effect
    star.addEventListener('mouseenter', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        highlightStars(rating);
    });

    // Click to select rating
    star.addEventListener('click', function() {
        currentRating = parseInt(this.getAttribute('data-rating'));
        ratingInput.value = currentRating;
        highlightStars(currentRating);
    });
});

// Reset stars on mouse leave
document.querySelector('.star-rating').addEventListener('mouseleave', function() {
    highlightStars(currentRating);
});

function highlightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Form submission
experienceForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate rating
    if (currentRating === 0) {
        alert('Please select a rating!');
        return;
    }

    // Get form data
    const formData = {
        name: document.getElementById('userName').value,
        destination: document.getElementById('destination').value,
        rating: currentRating,
        experience: document.getElementById('experience').value,
        timestamp: new Date().toISOString()
    };

    // Log form data (you can send this to a server)
    console.log('Experience submitted:', formData);

    // Store in localStorage (optional)
    storeExperience(formData);

    // Close experience popup
    experiencePopup.classList.remove('show');

    // Show success popup
    setTimeout(() => {
        successPopup.classList.add('show');
    }, 300);

    // Reset form
    experienceForm.reset();
    currentRating = 0;
    highlightStars(0);
});

// Store experience in localStorage
function storeExperience(data) {
    let experiences = JSON.parse(localStorage.getItem('travelExperiences') || '[]');
    experiences.push(data);
    localStorage.setItem('travelExperiences', JSON.stringify(experiences));
}

// Close success popup
successCloseBtn.addEventListener('click', function() {
    successPopup.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close success popup when clicking outside
successPopup.addEventListener('click', function(e) {
    if (e.target === successPopup) {
        successPopup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Auto-close success popup after 3 seconds
function autoCloseSuccess() {
    setTimeout(() => {
        if (successPopup.classList.contains('show')) {
            successPopup.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }, 3000);
}

// Trigger auto-close when success popup shows
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.target.classList.contains('show') && 
            mutation.target === successPopup) {
            autoCloseSuccess();
        }
    });
});

observer.observe(successPopup, { 
    attributes: true, 
    attributeFilter: ['class'] 
});

// Smooth scroll for navigation links
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

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close popups
    if (e.key === 'Escape') {
        if (experiencePopup.classList.contains('show')) {
            experiencePopup.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        if (successPopup.classList.contains('show')) {
            successPopup.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }
});

// Animate button on page load
window.addEventListener('load', function() {
    openExperienceBtn.style.animation = 'none';
    setTimeout(() => {
        openExperienceBtn.style.animation = '';
    }, 10);
});