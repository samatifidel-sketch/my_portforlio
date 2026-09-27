// ============================================
// PROJECT FILTERING FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Filter project cards
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    // Show all projects
                    card.classList.remove('hidden');
                } else {
                    // Show only projects matching the filter
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});

// ============================================
// CONTACT FORM VALIDATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous error messages
            clearErrors();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form
            let isValid = true;

            // Name validation
            if (name === '') {
                showError('name', 'Please enter your name');
                isValid = false;
            } else if (name.length < 2) {
                showError('name', 'Name must be at least 2 characters long');
                isValid = false;
            }

            // Email validation
            if (email === '') {
                showError('email', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }

            // Message validation
            if (message === '') {
                showError('message', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters long');
                isValid = false;
            }

            // If form is valid, submit
            if (isValid) {
                submitForm(name, email, message);
            }
        });
    }
});

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show error messages
function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    input.classList.add('error');
    errorElement.textContent = message;
}

// Helper function to clear all error messages
function clearErrors() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    const errorMessages = document.querySelectorAll('.error-message');
    
    inputs.forEach(input => input.classList.remove('error'));
    errorMessages.forEach(msg => msg.textContent = '');
}

// Helper function to submit form
function submitForm(name, email, message) {
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Thank you! Your message has been received. I\'ll get back to you soon.';
    
    // Clear form fields
    document.getElementById('contactForm').reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.textContent = '';
    }, 5000);
    
    // Note: In a real application, you would send this data to a server here
    // Example: fetch('/submit-form', { method: 'POST', body: JSON.stringify({name, email, message}) })
    console.log('Form submitted:', { name, email, message });
}
