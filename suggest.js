// Popup functionality for suggestion buttons
function showPopup(type) {
    const overlay = document.getElementById('popupOverlay');
    const icon = document.getElementById('popupIcon');
    const title = document.getElementById('popupTitle');
    const message = document.getElementById('popupMessage');
    
    if (type === 'perfect') {
        icon.innerHTML = '✓';
        icon.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        title.textContent = 'Perfect Choice!';
        message.textContent = 'Excellent! This destination is highly recommended for you. Get ready for an amazing experience!';
    } else if (type === 'notimpressed') {
        icon.innerHTML = '!';
        icon.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        title.textContent = 'Not Impressed?';
        message.textContent = 'This place might not be the best fit for you. Explore other destinations for better options!';
    }
    
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('popupOverlay');
    if (e.target === overlay) {
        closePopup();
    }
});