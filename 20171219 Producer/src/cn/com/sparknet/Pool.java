package cn.com.sparknet;

import java.util.LinkedList;
import java.util.List;

public class Pool {
    private int number=0;
    private List<Product>products=new LinkedList<Product>();

    public int getNumber() {
        return number;
    }
    public void setNumber(int number) {
        this.number = number;
    }
    public synchronized Product consumeProduct(){  //可以去掉synchronized关键字
        if(products.size()>0) {
            Product p= products.get(0);
            products.remove(0);
            number--;
            return p;
        }
        else
            return null;
    }
    public synchronized void addProduct(Product p){  //可以去掉synchronized关键字
        products.add(p);
        number++;
    }
}