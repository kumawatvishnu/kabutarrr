package com.kabutarrr.foodiesapi;

import java.util.Queue;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class OPSMain {
    public static void main(String[] args) {
        BlockingQueue<Order> orders = new LinkedBlockingQueue<>();
        Thread producer = new Thread(() -> {
            for(int i=0; i<100; i++){
                orders.add(new Order("id-"+i, "sym-"+i, 10+i, 99));
            }
            System.out.println("Thread ======> " + Thread.currentThread().getName());
        });
        producer.start();

        int worker = 5;
        ExecutorService executorService = Executors.newFixedThreadPool(worker);
        for(int i=0; i<worker; i++) {

            executorService.submit(() -> {
                while (true) {
                    try {
                        Order order = orders.take();
                        order.match();
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }

                }
            });
        };
        System.out.println("Thread ======> " + Thread.currentThread().getName());
        executorService.shutdown();
    }
}
class Task1 implements Runnable{
    Order order;

    public Task1(Order order) {
        this.order = order;
    }

    @Override
    public void run() {
        try{
            order.match();
        }
        catch (Exception e){
            System.out.println("Error : "+ e);
        }
    }
}

class Order{
    String id;
    String symbol;
    int price;
    int qty;

    public Order(String s, String s1, int i, int i1) {
        this.id = s;
        this.symbol = s1;
        this.price = i;
        this.qty = i1;
    }
    void match(){
        System.out.println("Thread : "+ Thread.currentThread().getName() + " processing "+ id + " symbol "+symbol+" price "+ price);
    }
}
