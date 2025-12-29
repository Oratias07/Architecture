import threading

x=0

def increment():
    global x
    for _ in range (1000000):
        x += 1

def main():
    global x
    x=0
    t1 = threading.Thread(target=increment)
    t2 = threading.Thread(target=increment)

    t1.start()
    t2.start()
    
    t1.join()
    t2.join()

for i in range(10):
    main()
    print("Iteration: ", i, " x: ", x)
