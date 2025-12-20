
# student1 = Student("Israel Israeli", 20, "sw", 2023)
# student2 = Student("Israel Israeli", 20, "sw", 2023)

# print(student1)
# print(student2)
# print("student2 name:", student2.name)
# print("student1 start Year:", student1.startYear)
# print("student2 department:", student2.department)
# print("student2 age:", student2.age)
# print("student1 country:", student1.country)

# isEqual = (student1 == student2)
# print("Same object?", isEqual)
# nameEqual = (student1.name == student2.name)
# print("The name is Equal?", nameEqual)

# std = Student() ##error## - without parameters

class Student:
    country = "Israel"
    def __init__(self, name, age, startYear):
        self.name = name
        self.age = age
        self.startYear = startYear
    def description(self):
        return f"{self.name} is {self.age} years old"


class SoftwareStudent (Student):
    def dept(self):
        return f"{self.name} is studying at Software Engineering department"

class MathematicsStudent (Student):
    def dept(self):
        return f"{self.name} is studying at Mathematics department"

class CivilStudent (Student):
    def dept(self):
        return f"{self.name} is studying at Civil Engineering department"

kirk = SoftwareStudent("James Kirk", 23, 2020)
spock = MathematicsStudent("Spock", 27, 2019)
jack = CivilStudent("Leonard Jack", 25, 2022)

# for student in (kirk, spock, jack):
#     print(f"name: {student.name}, age: {student.age}, country: {student.country}, department: {student.department}, startYear: {student.startYear}")


for student in (kirk, spock, jack):
    print(student.dept())

#print(kirk.description())
#print(kirk.satisfaction('very satisfied'))

print(kirk.dept())