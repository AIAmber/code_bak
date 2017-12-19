package cn.com.sparknet;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

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

	public void run() {
		while(!Thread.currentThread().interrupted()) {
			Product p=new Product(String.valueOf(++i_p));
			try {
//				URL url = new URL("http://10.66.1.46:8080/Consumer/ConsumerServlet");
//				HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
//				System.out.println(urlConnection.getResponseCode());
				Thread.sleep(200);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			synchronized(pool)
            {
                pool.addProduct(p);
                System.out.println("producer "+id+" adding product...."+p.toString());
                pool.notifyAll();
                URL url;
				try {
					url = new URL("http://10.66.1.46:8080/Consumer/ConsumerServlet");
					HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
					System.out.println(urlConnection.getResponseCode());
				} catch ( IOException e ) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
            }
		}
	}
//  public void url() throws MalformedURLException {
//	URL url = new URL("http://10.66.1.46:8080/Consumer/ConsumerServlet");
//}
	
//	public static void main(String[] args) throws Exception {
//	
//	URL url = new URL("http://10.66.1.46:8080/Consumer/ConsumerServlet");    
//	
//	
//	
//	for(int i=0; i<10; i++) {
//		HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
//		System.out.println(urlConnection.getResponseCode());
//	}
//}

}
