// Image URLs for the slideshow (same as index)
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

// Form submission handling
const contactForm = document.getElementById('contactForm');
const contactPopup = document.getElementById('contactPopup');
const successPopup = document.getElementById('successPopup');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Log form data (in real app, send to server)
    console.log('Form submitted:', formData);
    
    // Hide contact form popup
    contactPopup.classList.add('hide');
    
    // Show success popup after a short delay
    setTimeout(() => {
        successPopup.style.display = 'flex';
        setTimeout(() => {
            successPopup.classList.add('show');
        }, 10);
    }, 500);
    
    // Reset form
    contactForm.reset();
});

// Optional: Close success popup when clicking outside
successPopup.addEventListener('click', function(e) {
    if (e.target === successPopup) {
        successPopup.classList.remove('show');
        setTimeout(() => {
            successPopup.style.display = 'none';
            contactPopup.classList.remove('hide');
        }, 500);
    }
});