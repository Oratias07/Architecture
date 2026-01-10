
class Problem:
    def __init__(self, name, description):
        self.name = name
        self.description = description
 
    def BusinessLinkage(self, businessId):
        self.business = Business(businessId)

    def AddSeverity(self, severityScore):
        self.severityScore = severityScore
        print(f"The severity score is {self.severityScore}")
        
class Advantage:
    def __init__(self, name, description):
        self.name = name
        self.description = description
 
    def BusinessLinkage(self, businessId):
        self.business = Business(businessId)

    def AddScore(self, score):
        self.score = score
        print(f"The score is {self.score}")
        
class Business:
    business = None
    def __new__(cls, businessId):
        if cls.business is not None:
            return cls.business
        cls.business = super().__new__(cls)
        return cls.business
    def __init__(self, businessId):
        self.id = businessId
        
class MyProblem(Problem):#Represents a specific marketing-related problem identified in the organization
    #Initializes a specific problem with additional attributes
    #related to the marketing message complexity
    def __init__(self, name, description, audienceCount, serviceCount):
        super().__init__(name, description)
        self.audienceCount = audienceCount   # The number of different target audiences the clinic attempts to address
        self.serviceCount = serviceCount     #The number of different treatment services presented simultaneously
    def problemName(self):
        return f"{self.name} is the problem"    
    def problemDescription(self):
        return f"{self.description} is the problem description"
    def BusinessLinkage(self, businessId):
        super().BusinessLinkage(businessId)
    def AddSeverity(self, severityScore):
        super().AddSeverity(severityScore)
    #Displays the number of target audiences and services
    #associated with this problem
    def showCounts(self):
        return f"Audiences: {self.audienceCount}, Services: {self.serviceCount}"
    
class MyAdvantage(Advantage):
    def __init__(self, name, description, experienceStartYear, certificationsCount):
        super().__init__(name, description)
        self.experienceStartYear = experienceStartYear
        self.certificationsCount = certificationsCount
    
    def advantageName(self):
        return f"{self.name} is an advantage"

    def advantageDescription(self):
        return f"{self.description} is the advantage description"
        
    def BusinessLinkage(self, businessId):
        super().BusinessLinkage(businessId)
        
    def AddScore(self, score):
        super().AddScore(score)
        
    def expertiseSummary(self):
        return f"Professional experience since: {self.experienceStartYear}, Certifications: {self.certificationsCount}"

class MyBusiness(Business):
    def __init__(self, businessId):
        super().__init__(businessId)
        self.businessname = "Ziv Askarov Therapy Clinic"
        self.fieldOfActivity = "Emotional and Psychological Therapy"
        self.businessDescription = "A therapy clinic specializing in emotional and psychological treatment."
        
    def BusinessSummary(self):
        return f"Business Name: {self.businessname}, Field of Activity: {self.fieldOfActivity}"
        
TheBusiness = MyBusiness(1)
print(TheBusiness.BusinessSummary())
print(TheBusiness.id)

Problem1 = MyProblem("Unfocused Marketing Message", "The clinic promotes multiple treatments at once, which makes the message unclear",4, 6 )   
print(Problem1.problemName())
print(Problem1.problemDescription())
Problem1.BusinessLinkage(1)
Problem1.AddSeverity(3)

print(f"Linked Business ID: {Problem1.business.id}")
print(f"Severity Score: {Problem1.severityScore}")
        
Advantage1 = MyAdvantage("Professional Expertise", "The clinic provides professional treatment based on extensive experience and formal certifications.", 2018, 10)
print(Advantage1.advantageName())
print(Advantage1.advantageDescription())
print(Advantage1.expertiseSummary())
        