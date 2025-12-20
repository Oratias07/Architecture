/**
 * שכבת ממשק המשתמש (UI/Presentation Layer)
 * אחראית על אינטראקציות עם המשתמש, אירועים, ועדכון הממשק
 */

// גלילה חלקה עבור קישורי הניווט ואתחול אנימציות
document.addEventListener('DOMContentLoaded', function() {
    // הוספת גלילה חלקה לכל הקישורים בתפריט הניווט
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // אתחול אנימציית פרחים נופלים
    initFallingFlowers();
});

// פונקציה ליצירת אנימציית פרחים נופלים
function initFallingFlowers() {
    const flowersContainer = document.getElementById('flowers-container');
    const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '🌷', '🏵️', '💮', '🥀'];
    const numberOfFlowers = 200; // כמות הפרחים שיהיו על המסך
    
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        
        // מיקום אקראי בציר X
        flower.style.left = Math.random() * 100 + '%';
        
        // גודל אקראי
        const size = 15 + Math.random() * 15; // בין 15px ל-30px
        flower.style.fontSize = size + 'px';
        
        // משך זמן אקראי לנפילה (בין 8 ל-15 שניות)
        const duration = 8 + Math.random() * 7;
        flower.style.animationDuration = duration + 's';
        
        // עיכוב אקראי להתחלה
        const delay = Math.random() * 1.5;
        flower.style.animationDelay = delay + 's';
        
        flowersContainer.appendChild(flower);
        
        // הסרת הפרח אחרי שסיים ליפול ויצירת פרח חדש
        setTimeout(() => {
            flower.remove();
            createFlower();
        }, (duration + delay) * 1000);
    }
    
    // יצירת הפרחים הראשוניים
    for (let i = 0; i < numberOfFlowers; i++) {
        setTimeout(() => createFlower(), i * 200);
    }
}

// פונקציה להרחבה/כיווץ של שיטות טיפול
function toggleTreatment(treatmentId) {
    const content = document.getElementById(treatmentId);
    const button = content.previousElementSibling;
    const icon = button.querySelector('.toggle-icon');
    
    // בדיקה אם התוכן פתוח
    const isOpen = content.classList.contains('open');
    
    if (isOpen) {
        // סגירה
        content.classList.remove('open');
        icon.classList.remove('open');
    } else {
        // פתיחה
        content.classList.add('open');
        icon.classList.add('open');
    }
}

// פונקציה להרחבה/כיווץ של מידע אודות
function toggleAbout() {
    const aboutContent = document.getElementById('aboutContent');
    const toggleIcon = document.getElementById('aboutToggleIcon');
    const toggleText = document.getElementById('aboutToggleText');
    
    // בדיקה אם התוכן פתוח
    const isOpen = aboutContent.classList.contains('open');
    
    if (isOpen) {
        // סגירה
        aboutContent.classList.remove('open');
        toggleIcon.classList.remove('open');
        toggleText.textContent = 'לחץ לקריאת מידע נוסף עליי';
    } else {
        // פתיחה
        aboutContent.classList.add('open');
        toggleIcon.classList.add('open');
        toggleText.textContent = 'לחץ לסגירת המידע';
    }
}

// פונקציה לאיסוף נתוני הטופס
function getFormData() {
    return {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
}

// פונקציה להצגת הודעת שגיאה
function showErrorMessage(errors) {
    const resultDiv = document.getElementById('formResult');
    
    let errorHTML = '<div style="background-color: #ffebee; color: #c62828; padding: 15px; border-radius: 8px; border-right: 4px solid #c62828;">';
    errorHTML += '<strong>אנא תקן את השגיאות הבאות:</strong><ul style="margin: 10px 0; padding-right: 20px;">';
    
    errors.forEach(error => {
        errorHTML += `<li>${error}</li>`;
    });
    
    errorHTML += '</ul></div>';
    
    resultDiv.innerHTML = errorHTML;
    resultDiv.style.display = 'block';
    
    // גלילה להודעת השגיאה
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// פונקציה להצגת הודעת הצלחה
function showSuccessMessage(message) {
    const resultDiv = document.getElementById('formResult');
    
    const successHTML = `
        <div style="background-color: #e8f5e9; color: #2e7d32; padding: 15px; border-radius: 8px; border-right: 4px solid #4caf50;">
            <strong>✓ ${message}</strong>
        </div>
    `;
    
    resultDiv.innerHTML = successHTML;
    resultDiv.style.display = 'block';
    
    // גלילה להודעת ההצלחה
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// פונקציה לניקוי הטופס
function clearContactForm() {
    document.getElementById('contactForm').reset();
    const resultDiv = document.getElementById('formResult');
    resultDiv.style.display = 'none';
}

// הפונקציה הראשית לטיפול בשליחת הטופס
function handleFormSubmit() {
    // איסוף נתוני הטופס
    const formData = getFormData();
    
    // עיבוד הטופס דרך שכבת הלוגיקה העסקית
    const result = processContactFormSubmission(formData);
    
    // טיפול בתוצאה
    if (result.success) {
        // הצלחה - הצגת הודעה וניקוי הטופס
        showSuccessMessage(result.message);
        
        // ניקוי הטופס אחרי 2 שניות
        setTimeout(() => {
            clearContactForm();
        }, 2000);
        
        // הדפסת מפתח הלקוח לקונסול (לצורכי ניפוי באגים)
        console.log('לקוח נשמר עם מפתח:', result.customerKey);
        
    } else {
        // שגיאה - הצגת הודעות שגיאה
        showErrorMessage(result.errors);
    }
}

// פונקציית עזר להצגת כל הלקוחות (לצורכי ניפוי באגים)
function showAllCustomers() {
    const customers = getAllCustomers();
    console.log('=== כל הלקוחות ב-localStorage ===');
    console.log(`סה"כ לקוחות: ${customers.length}`);
    
    customers.forEach((customer, index) => {
        console.log(`\n--- לקוח ${index + 1} ---`);
        console.log('מפתח:', customer.key);
        console.log('שם:', customer.data.firstName, customer.data.lastName);
        console.log('טלפון:', customer.data.phone);
        console.log('אימייל:', customer.data.email);
        console.log('הודעה:', customer.data.message);
        console.log('נשלח בתאריך:', customer.data.submittedAt);
    });
    
    console.log('\n=================================');
    return customers;
}
