package com.lirj;

public class Producer implements Runnable{
    private int i_p=0;
    private String id;
    Pool pool;
    int i=0;
    public Producer(String id ,Pool pool)
    {
        this.id=id;
        this.pool=pool;
    }
    public Product createProduct()
    {
        return new Product(String.valueOf(++i_p));
    }
//    @Override
    public void run() {
        // TODO Auto-generated method stub
        while(!Thread.currentThread().interrupted())
        {
            Product p=new Product(String.valueOf(++i_p));
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            synchronized(pool)
            {
                pool.addProduct(p);
                System.out.println("producer "+id+" adding product...."+p.toString());
                pool.notifyAll();
            }
        }
    }
}
