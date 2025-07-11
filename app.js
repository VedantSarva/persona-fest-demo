document.addEventListener('DOMContentLoaded', function () {
    // Signup form logic (if present)
    const form = document.getElementById('signupForm');
    const message = document.getElementById('signupMessage');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const event = form.event.value;
            if (name && email && event) {
                message.textContent = `Thank you, ${name}! You have signed up for the ${event.charAt(0).toUpperCase() + event.slice(1)} event.`;
                message.style.color = 'green';
                form.reset();
            } else {
                message.textContent = 'Please fill in all fields.';
                message.style.color = 'red';
            }
        });
    }

    // Dropdown with delayed hide and animation
    var dropdown = document.querySelector('.navbar__dropdown');
    var hideTimeout;

    if (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            clearTimeout(hideTimeout);
            dropdown.classList.add('open');
        });

        dropdown.addEventListener('mouseleave', function () {
            hideTimeout = setTimeout(function () {
                dropdown.classList.remove('open');
            }, 250); // 250ms delay before hiding
        });
    }

    // Ensure click on "Events" still navigates
    var eventsDropdownLink = document.getElementById('eventsDropdownLink');
    if (eventsDropdownLink) {
        eventsDropdownLink.addEventListener('click', function(e) {
            window.location.href = 'tech.html';
        });
    }

    // Section fade-in on scroll
    const animatedSections = document.querySelectorAll(
        '.hero, .events, .about, .signup, .profile, .dev-console, footer, .event-card'
    );
    function revealOnScroll() {
        const trigger = window.innerHeight * 0.92;
        animatedSections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top < trigger) sec.style.opacity = 1;
        });
    }
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});