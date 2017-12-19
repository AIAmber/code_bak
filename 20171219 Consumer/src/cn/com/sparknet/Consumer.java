package cn.com.sparknet;

public class Consumer implements Runnable {
    private String id;
    Pool pool;
    public Consumer(String id,Pool pool)
    {
        this.id=id;
        this.pool=pool;
    }
//    @Override
    public void run() {
        while(!Thread.currentThread().interrupted())
        {
            Product product=null;
            synchronized(pool){
                while(pool.getNumber()<=0)//生产不足
                {
                    try {
                        pool.wait();//生产者等待
                    } catch (InterruptedException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                }
                product=pool.consumeProduct();
            }
            System.out.println("consuming "+id+product.toString());
            try {
                Thread.sleep(1000*10);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }
}
