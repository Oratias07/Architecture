/**
 * שכבת הלוגיקה העסקית (Business Logic Layer)
 * אחראית על ולידציה, עיבוד נתונים, וכללי עסקיים
 */

// פונקציית עזר להסרת רווחים מיותרים
function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// בדיקת תקינות שם (פרטי או משפחה)
function validateName(name, fieldName) {
    const trimmedName = trimString(name);
    
    if (trimmedName === '') {
        return { valid: false, message: `אנא הזן ${fieldName}` };
    }
    
    if (trimmedName.length < 2) {
        return { valid: false, message: `${fieldName} חייב להכיל לפחות 2 תווים` };
    }
    
    return { valid: true, value: trimmedName };
}

// בדיקת תקינות טלפון
function validatePhone(phone) {
    const trimmedPhone = trimString(phone);
    
    if (trimmedPhone === '') {
        return { valid: false, message: 'אנא הזן מספר טלפון' };
    }
    
    // מסיר מקפים ורווחים
    const cleanPhone = trimmedPhone.replace(/[-\s]/g, '');
    
    // בודק שיש רק ספרות
    if (!/^\d+$/.test(cleanPhone)) {
        return { valid: false, message: 'מספר טלפון יכול להכיל רק ספרות' };
    }
    
    // בודק אורך (10 ספרות או 9 ספרות עם קידומת)
    if (cleanPhone.length !== 10 && cleanPhone.length !== 9) {
        return { valid: false, message: 'מספר טלפון חייב להכיל 9-10 ספרות' };
    }
    
    return { valid: true, value: cleanPhone };
}

// בדיקת תקינות אימייל
function validateEmail(email) {
    const trimmedEmail = trimString(email);
    
    if (trimmedEmail === '') {
        return { valid: false, message: 'אנא הזן כתובת אימייל' };
    }
    
    // ביטוי רגולרי לבדיקת פורמט אימייל
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(trimmedEmail)) {
        return { valid: false, message: 'אנא הזן כתובת אימייל תקינה' };
    }
    
    return { valid: true, value: trimmedEmail };
}

// בדיקת תקינות הודעה
function validateMessage(message) {
    const trimmedMessage = trimString(message);
    
    if (trimmedMessage === '') {
        return { valid: false, message: 'אנא כתוב את פנייתך' };
    }
    
    if (trimmedMessage.length < 10) {
        return { valid: false, message: 'הפנייה חייבת להכיל לפחות 10 תווים' };
    }
    
    return { valid: true, value: trimmedMessage };
}

// ולידציה מלאה של כל הטופס
function validateContactForm(formData) {
    const errors = [];
    const validatedData = {};
    
    // בדיקת שם פרטי
    const firstNameResult = validateName(formData.firstName, 'שם פרטי');
    if (!firstNameResult.valid) {
        errors.push(firstNameResult.message);
    } else {
        validatedData.firstName = firstNameResult.value;
    }
    
    // בדיקת שם משפחה
    const lastNameResult = validateName(formData.lastName, 'שם משפחה');
    if (!lastNameResult.valid) {
        errors.push(lastNameResult.message);
    } else {
        validatedData.lastName = lastNameResult.value;
    }
    
    // בדיקת טלפון
    const phoneResult = validatePhone(formData.phone);
    if (!phoneResult.valid) {
        errors.push(phoneResult.message);
    } else {
        validatedData.phone = phoneResult.value;
    }
    
    // בדיקת אימייל
    const emailResult = validateEmail(formData.email);
    if (!emailResult.valid) {
        errors.push(emailResult.message);
    } else {
        validatedData.email = emailResult.value;
    }
    
    // בדיקת הודעה
    const messageResult = validateMessage(formData.message);
    if (!messageResult.valid) {
        errors.push(messageResult.message);
    } else {
        validatedData.message = messageResult.value;
    }
    
    // החזרת תוצאה
    if (errors.length > 0) {
        return {
            valid: false,
            errors: errors
        };
    }
    
    // הוספת תאריך שליחה
    validatedData.timestamp = new Date().toISOString();
    validatedData.submittedAt = new Date().toLocaleString('he-IL');
    
    return {
        valid: true,
        data: validatedData
    };
}

// עיבוד שליחת טופס (מקשר בין ולידציה לשמירה)
function processContactFormSubmission(formData) {
    // ולידציה
    const validationResult = validateContactForm(formData);
    
    if (!validationResult.valid) {
        return {
            success: false,
            errors: validationResult.errors
        };
    }
    
    // שמירה ב-localStorage
    const saveResult = saveCustomer(validationResult.data);
    
    if (!saveResult.success) {
        return {
            success: false,
            errors: ['אירעה שגיאה בשמירת הנתונים. אנא נסה שוב.']
        };
    }
    
    return {
        success: true,
        message: 'הפנייה נשלחה בהצלחה! ניצור איתך קשר בהקדם.',
        customerKey: saveResult.key
    };
}