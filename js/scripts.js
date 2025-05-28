// js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            menuToggle.classList.toggle('transform');
            menuToggle.classList.toggle('rotate-90');
        });
    }

    // Form validation for login and signup
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();
            const errorDiv = document.getElementById('login-error');
            
            errorDiv.textContent = '';
            if (!email || !password) {
                errorDiv.textContent = 'Please fill in all fields.';
                return;
            }
            // Simulate form submission (replace with actual backend logic)
            console.log('Login submitted:', { email, password });
            alert('Login form submitted successfully!');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();
            const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
            const errorDiv = document.getElementById('signup-error');
            
            errorDiv.textContent = '';
            if (!name || !email || !password || !confirmPassword) {
                errorDiv.textContent = 'Please fill in all fields.';
                return;
            }
            if (password !== confirmPassword) {
                errorDiv.textContent = 'Passwords do not match.';
                return;
            }
            // Simulate form submission (replace with actual backend logic)
            console.log('Signup submitted:', { name, email, password });
            alert('Signup form submitted successfully!');
        });
    }
});