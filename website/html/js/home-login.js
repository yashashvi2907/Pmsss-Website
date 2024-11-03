// Open Popup
document.querySelector('.login-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default action of link
    document.getElementById('loginPopup').style.display = 'flex';
});

// Close Popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'none';
});

// Close Popup when clicking outside the form
window.addEventListener('click', function(event) {
    const popup = document.getElementById('loginPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});