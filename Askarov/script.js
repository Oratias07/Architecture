// script.js

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form validation and submission
function submitForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !lastName) {
        alert('אנא מלא שם פרטי ושם משפחה');
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert('אנא הזן מספר טלפון חוקי בן 10 ספרות');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('אנא הזן כתובת אימייל חוקית');
        return;
    }

    if (!message) {
        alert('אנא הזן את תוכן ההודעה שלך');
        return;
    }

    alert('ההודעה נשלחה בהצלחה!');
    document.querySelector('#contact form').reset();
}
