document.addEventListener("DOMContentLoaded", function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Form validation
    const signupForm = document.querySelector("#signup form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            const password = signupForm.querySelector("#password");
            const confirmPassword = signupForm.querySelector("#confirm-password");

            if (password.value !== confirmPassword.value) {
                event.preventDefault();
                alert("Passwords do not match!");
            }
        });
    }

    const employerSignupForm = document.querySelector("#employer-signup form");
    if (employerSignupForm) {
        employerSignupForm.addEventListener("submit", function(event) {
            const password = employerSignupForm.querySelector("#password");
            const confirmPassword = employerSignupForm.querySelector("#confirm-password");

            if (password.value !== confirmPassword.value) {
                event.preventDefault();
                alert("Passwords do not match!");
            }
        });
    }
});
