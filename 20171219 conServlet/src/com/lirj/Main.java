package com.lirj;

public class Main {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Pool pool=new Pool();
//        for(int i=0;i<1;i++)
//        {
//            Thread consumer=new Thread(new Consumer("consumer "+i,pool));
////            Thread producer=new Thread(new Producer("producer "+i,pool));
//            consumer.start();
////            producer.start();
//        }

//        for(int i=0;i<1;i++)
//        {
//            Thread consumer=new Thread(new Consumer("consumer "+i,pool));
////            Thread producer=new Thread(new Producer("producer "+i,pool));
//            consumer.start();
////            producer.start();
//        }
        for(int i=0;i<100;i++)
        {
//            Thread consumer=new Thread(new Consumer("consumer "+i,pool));
            Thread producer=new Thread(new Producer("producer "+i,pool));
//            consumer.start();
            producer.start();
        }
    }
}
