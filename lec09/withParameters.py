from time import sleep, perf_counter
from threading import Thread

def task(id):
    print(f'starting a task {id}...')
    sleep(1)
    print(f'the task {id} completed')

start_time = perf_counter()

# create and start 10 threads
threads = []

for n in range(0,10):
    t = Thread(target=task, args=(n,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

end_time = perf_counter()
print(f'It took {end_time - start_time} seconds to complete')
