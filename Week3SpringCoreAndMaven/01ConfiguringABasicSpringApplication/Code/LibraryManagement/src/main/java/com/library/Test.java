package com.library;

import com.library.repository.BookRepository;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookRepository repo = (BookRepository) context.getBean("bookRepository");
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.setInternalRepository(repo);
        bookService.printBookTitle();
    }
}
