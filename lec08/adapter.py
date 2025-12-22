# ייבוא ספריית random להגרלת מספרים אקראיים
import random

# ========================================
# מחלקות מקוריות עם ממשקים שונים
# ========================================

# מחלקה המייצגת מכונית - עם ממשק מקורי
class Car:
    """מחלקה המייצגת מכונית"""
    
    def __init__(self):
        """פונקציית בנאי - מאתחלת את המכונית"""
        self.speed = 0  # מהירות התחלתית
        self.driver = None  # אין נהג בהתחלה
    
    def accelerate(self):
        """פונקציית האצה מקורית - מגרילה מהירות בין 100-140"""
        # הגרלת מספר אקראי בין 100-140 למהירות חדשה
        acceleration = random.Random().randint(100, 140)
        self.speed = acceleration  # עדכון המהירות
        print(f" מכונית - האצה! המהירות החדשה: {self.speed} קמ\"ש")
    
    def apply_brakes(self):
        """פונקציית האטה מקורית - מגרילה מהירות בין 20-40"""
        # הגרלת מספר אקראי בין 20-40 למהירות אחרי בלימה
        deceleration = random.Random().randint(20, 40)
        self.speed = deceleration  # עדכון המהירות
        print(f" מכונית - בלימה! המהירות החדשה: {self.speed} קמ\"ש")
    
    def assign_driver(self, driver_name):
        """השמת נהג למכונית - פונקציה מקורית"""
        self.driver = driver_name  # שמירת שם הנהג
        print(f" מכונית - {driver_name} הוא/היא הנהג/ת החדש/ה")


# מחלקה המייצגת אופנוע - עם ממשק מקורי שונה
class Motorcycle:
    """מחלקה המייצגת אופנוע"""
    
    def __init__(self):
        """פונקציית בנאי - מאתחלת את האופנוע"""
        self.speed = 0  # מהירות התחלתית
        self.rider = None  # אין רוכב בהתחלה
    
    def rev(self):
        """פונקציית האצה מקורית - מגרילה מהירות בין 100-140"""
        # הגרלת מספר אקראי בין 100-140 למהירות חדשה
        acceleration = random.Random().randint(100, 140)
        self.speed = acceleration  # עדכון המהירות
        print(f" אופנוע - רועש המנוע! המהירות החדשה: {self.speed} קמ\"ש")
    
    def pull_brake_lever(self):
        """פונקציית האטה מקורית - מגרילה מהירות בין 20-40"""
        # הגרלת מספר אקראי בין 20-40 למהירות אחרי בלימה
        deceleration = random.Random().randint(20, 40)
        self.speed = deceleration  # עדכון המהירות
        print(f" אופנוע - משיכת ידית הבלם! המהירות החדשה: {self.speed} קמ\"ש")
    
    def assign_rider(self, rider_name):
        """השמת רוכב לאופנוע - פונקציה מקורית"""
        self.rider = rider_name  # שמירת שם הרוכב
        print(f" אופנוע - {rider_name} הוא/היא הרוכב/ת החדש/ה")


# ========================================
#  ADAPTER PATTERN - מתאמים 
# ========================================

# Adapter למכונית - ממיר את הממשק המקורי לממשק אחיד
class CarAdapter:
    """Adapter שממיר את ממשק המכונית לממשק אחיד"""
    
    def __init__(self, car):
        """מקבל אובייקט מכונית ועוטף אותו"""
        self.car = car  # שמירת המכונית המקורית
    
    def assign(self, name):
        """ממשק אחיד - ממיר ל-assign_driver"""
        self.car.assign_driver(name)  # קריאה לפונקציה המקורית
    
    def speedUp(self):
        """ממשק אחיד - ממיר ל-accelerate"""
        self.car.accelerate()  # קריאה לפונקציה המקורית
    
    def brake(self):
        """ממשק אחיד - ממיר ל-apply_brakes"""
        self.car.apply_brakes()  # קריאה לפונקציה המקורית


# Adapter לאופנוע - ממיר את הממשק המקורי לממשק אחיד
class MotorcycleAdapter:
    """Adapter שממיר את ממשק האופנוע לממשק אחיד"""
    
    def __init__(self, motorcycle):
        """מקבל אובייקט אופנוע ועוטף אותו"""
        self.motorcycle = motorcycle  # שמירת האופנוע המקורי
    
    def assign(self, name):
        """ממשק אחיד - ממיר ל-assign_rider"""
        self.motorcycle.assign_rider(name)  # קריאה לפונקציה המקורית
    
    def speedUp(self):
        """ממשק אחיד - ממיר ל-rev"""
        self.motorcycle.rev()  # קריאה לפונקציה המקורית
    
    def brake(self):
        """ממשק אחיד - ממיר ל-pull_brake_lever"""
        self.motorcycle.pull_brake_lever()  # קריאה לפונקציה המקורית


# ========================================
# שימוש ב-Adapters
# ========================================

# יצירת אובייקטים מקוריים
original_car = Car()
original_motorcycle = Motorcycle()

# עטיפה עם Adapters - יצירת ממשק אחיד
car_adapter = CarAdapter(original_car)
motorcycle_adapter = MotorcycleAdapter(original_motorcycle)

# יצירת רשימה עם ה-Adapters (עכשיו יש להם ממשק זהה!)
vehicles = [car_adapter, motorcycle_adapter]

print("=== מערכת ניהול רכבים עם Adapter Pattern ===\n")

# לולאה שעוברת על כל רכב ברשימה
# עכשיו אפשר לקרוא לאותן פונקציות בשני הרכבים!
for i, vehicle in enumerate(vehicles, 1):
    print(f"--- רכב מספר {i} ---")
    # קריאה לפונקציות דרך הממשק האחיד של ה-Adapter
    vehicle.assign(f"נהג_{i}")  # ה-Adapter ממיר לפונקציה הנכונה
    vehicle.speedUp()  # ה-Adapter ממיר לפונקציה הנכונה
    vehicle.brake()  # ה-Adapter ממיר לפונקציה הנכונה
    print()

print("\n=== סיבוב נוסף עם נהגים שונים ===\n")
# פעולות על המכונית דרך ה-Adapter
vehicles[0].assign("דוד כהן")
vehicles[0].speedUp()
vehicles[0].brake()

print()

# פעולות על האופנוע דרך ה-Adapter
vehicles[1].assign("שרה לוי")
vehicles[1].speedUp()
vehicles[1].brake()

print("\n" + "="*50)
print(" הסבר על Adapter Pattern:")
print("="*50)
print("המחלקות המקוריות (Car, Motorcycle) היו עם ממשקים שונים:")
print("  • Car: assign_driver(), accelerate(), apply_brakes()")
print("  • Motorcycle: assign_rider(), rev(), pull_brake_lever()")
print()
print("ה-Adapters (CarAdapter, MotorcycleAdapter) ממירים אותן")
print("לממשק אחיד: assign(), speedUp(), brake()")
print()
print("עכשיו אפשר להשתמש בשני הרכבים באותה לולאה! ")