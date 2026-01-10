class Fault:
    def __init__(self, name):
        self.name = name
        self.severity = 0

    def increase_severity(self, value):
        self.severity += value
        print(f"Fault '{self.name}' severity updated to {self.severity}")


class Benefit:
    def __init__(self, name):
        self.name = name
        self.score = 0

    def add_score(self, value):
        self.score += value
        print(f"Benefit '{self.name}' score updated to {self.score}")


class InfoAdapter:
    def __init__(self, obj, update_method):
        self.obj = obj
        self.updateScore = update_method


class Data:
    def __init__(self, business_id):
        self.business_id = business_id
        self.info = []

        fault1 = Fault("High costs")
        fault2 = Fault("Low availability")
        benefit1 = Benefit("Strong brand")

        self.info.append(InfoAdapter(fault1, fault1.increase_severity))
        self.info.append(InfoAdapter(fault2, fault2.increase_severity))
        self.info.append(InfoAdapter(benefit1, benefit1.add_score))


data = Data(123)

for i in data.info:
    i.updateScore(5)
    print('\n')
