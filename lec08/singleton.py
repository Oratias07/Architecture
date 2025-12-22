class DatabaseConnection:
    connection = None

def __new__(cls):
    if cls.connection is None:
        cls.connection = super().__new__(cls)
    return cls.connection

print('first')
first_connection = DatabaseConnection()
print(first_connection)
print('second')
second_connection = DatabaseConnection()
print(second_connection)