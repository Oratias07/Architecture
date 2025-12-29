from time import sleep, perf_counter
from threading import Thread

def task():
    print('starting a task...')
    sleep(1)
    print('done')

start_time = perf_counter()

# create new threads. each one run task() function
t1 = Thread(target=task)
t2 = Thread(target=task)

# start the threads
t1.start()
t2.start()

# wait for the threads to complete
t1.join()
t2.join()

end_time = perf_counter()

print(f'It took {end_time - start_time} seconds to complete')
