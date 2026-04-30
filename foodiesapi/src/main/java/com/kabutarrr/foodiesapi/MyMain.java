package com.kabutarrr.foodiesapi;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

public class MyMain {
    public static void main(String[] args) {
        Counter counter = new Counter();

        ExecutorService executorService = Executors.newFixedThreadPool(5);
        ExecutorService executorService2 = Executors.newFixedThreadPool(5);
        for(int i=0; i<100; i++){
            if(i%2 == 0)
                executorService.submit(new Task(counter));
//            else
//                executorService2.submit(new Task(counter));
        }
        System.out.println("Thread ======> " + Thread.currentThread().getName());
        executorService.shutdown();
        executorService2.shutdown();
    }
}
class Task implements Runnable{
    Counter counter;

    public Task(Counter counter) {
        this.counter = counter;
    }

    @Override
    public void run() {
        try{
            counter.increment();
        }
        catch (Exception e){
            System.out.println("Error : "+ e);
        }
        System.out.println("Thread : "+ Thread.currentThread().getName() + " Counter "+counter.getCount());
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
class Counter{
    AtomicInteger count = new AtomicInteger(0);
    void increment(){
        count.incrementAndGet();
    }
    int getCount(){
        return count.get();
    }
}

