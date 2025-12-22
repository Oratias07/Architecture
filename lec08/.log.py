class Logger:
    """
    מחלקת Logger בדפוס Singleton
    מבטיחה שיש רק עותק אחד של היומן בכל המערכת
    """
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            print("=== יוזם יומן חדש למכללת בראודה ===")
        return cls._instance
    
    def error(self, message):
        """רושם הודעת שגיאה ליומן"""
        print(f"ERROR: {message}")

# דוגמאות שימוש
if __name__ == "__main__":
    print("=== מערכת IT מכללת בראודה ===\n")
    
    # רכיב 1: מערכת ההרשמה
    print("--- רכיב: מערכת הרשמה ---")
    logger1 = Logger()
    logger1.error("שגיאה בחיבור למסד הנתונים")
    
    print("\n--- רכיב: מערכת נוכחות ---")
    # רכיב 3: מערכת הנוכחות
    logger3 = Logger()
    logger3.error("תקלה בקורא כרטיסים באולם 5")
    
    # בדיקה שכל המופעים הם אותו אובייקט
    print("\n=== בדיקת Singleton ===")
    print(f"logger1 זהה ל-logger3? {logger1 is logger3}")
    print(f"כתובת logger1: {id(logger1)}")
    print(f"כתובת logger3: {id(logger3)}")
