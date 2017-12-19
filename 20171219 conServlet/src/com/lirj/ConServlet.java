package com.lirj;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/conServlet")
public class ConServlet extends HttpServlet {
//    private String id;
//    Pool pool;
//    public ConServlet(String id,Pool pool)
//    {
//        super();
//        this.id=id;
//        this.pool=pool;
//    }
//    Consumer cons = new Consumer()
    Pool pool=new Pool();

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        for(int i=0; i<1; i++){
            Thread consumer = new Thread(new Consumer("consumer "+i,pool));
            consumer.start();
            out.println("consuming");
        }

        for(int i=0;i<100;i++)
        {
            Thread producer=new Thread(new Producer("producer "+i,pool));
            producer.start();
        }


    }
}
