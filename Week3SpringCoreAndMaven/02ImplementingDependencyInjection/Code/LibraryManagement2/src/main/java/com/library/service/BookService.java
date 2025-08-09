package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepo;

    public BookService(){
        super();
    }

    //    Setter for DI
    public void setBookRepository(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }

    public void printBookTitle() {
        System.out.println("Book Title : " + bookRepo.getBookTitle());
    }
}
