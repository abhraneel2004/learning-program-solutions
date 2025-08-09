package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepo;

    public BookService() {
        super();
    }
    public void setInternalRepository(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }

    public void printBookTitle() {
        System.out.println("Book Title : " + bookRepo.getBookTitle());
    }
}
