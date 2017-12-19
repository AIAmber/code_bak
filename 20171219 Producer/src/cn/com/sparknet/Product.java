package cn.com.sparknet;

public class Product {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public Product(String id)
    {
        this.id=id;
    }
    public String toString()
    {
        return "product "+id;
    }

}
