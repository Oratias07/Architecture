/**
 * שכבת הנתונים (Data Access Layer)
 * אחראית רק על פעולות localStorage - שמירה, קריאה, מחיקה
 */

// שמירת לקוח ל-localStorage
function saveCustomer(customerData) {
    try {
        const key = customerData.firstName + '_' + customerData.lastName + '_' + Date.now();
        const dataString = JSON.stringify(customerData);
        localStorage.setItem(key, dataString);
        return { success: true, key: key };
    } catch (error) {
        console.error('שגיאה בשמירת נתונים:', error);
        return { success: false, error: error.message };
    }
}

// קריאת כל הלקוחות מ-localStorage
function getAllCustomers() {
    const customers = [];
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const dataString = localStorage.getItem(key);
            
            if (dataString) {
                try {
                    const customerData = JSON.parse(dataString);
                    customers.push({
                        key: key,
                        data: customerData
                    });
                } catch (parseError) {
                    console.warn('לא ניתן לפענח נתוני לקוח:', key);
                }
            }
        }
    } catch (error) {
        console.error('שגיאה בקריאת נתונים:', error);
    }
    return customers;
}

// קריאת לקוח ספציפי לפי מפתח
function getCustomerByKey(key) {
    try {
        const dataString = localStorage.getItem(key);
        if (dataString) {
            return JSON.parse(dataString);
        }
        return null;
    } catch (error) {
        console.error('שגיאה בקריאת לקוח:', error);
        return null;
    }
}

// מחיקת לקוח מ-localStorage
function deleteCustomer(key) {
    try {
        localStorage.removeItem(key);
        return { success: true };
    } catch (error) {
        console.error('שגיאה במחיקת לקוח:', error);
        return { success: false, error: error.message };
    }
}

// ניקוי כל הנתונים (שימוש זהיר!)
function clearAllCustomers() {
    try {
        localStorage.clear();
        return { success: true };
    } catch (error) {
        console.error('שגיאה בניקוי נתונים:', error);
        return { success: false, error: error.message };
    }
}