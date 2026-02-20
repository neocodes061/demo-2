// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Simple Scroll Effect for Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Close mobile menu on scroll
    if (hamburger && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = '#ffffff';
    } else {
        navbar.style.padding = '15px 0';
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling with WhatsApp Integration
const form = document.querySelector('.contact-form');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const studentName = document.getElementById('studentName').value.trim();
        const studentPhone = document.getElementById('studentPhone').value.trim();
        const batchSelect = document.getElementById('batchSelect').value;
        
        // Validate phone number (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(studentPhone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        
        // Validate name (at least 2 characters)
        if (studentName.length < 2) {
            alert('Please enter a valid name.');
            return;
        }
        
        // Validate batch selection
        if (!batchSelect) {
            alert('Please select a batch.');
            return;
        }
        
        // Create WhatsApp message
        const message = `Hello! I am ${studentName}. My phone number is ${studentPhone}. I want to enroll in ${batchSelect} batch. Please guide me.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/919831756788?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Reset form
        form.reset();
    });
}