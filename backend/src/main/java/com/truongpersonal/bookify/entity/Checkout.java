package com.truongpersonal.bookify.entity;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Checkout")
@Data
public class Checkout {

    public Checkout() {}

    public Checkout(String userEmail, String checkoutDate, String returnDate, Long bookId) {
        this.userEmail = userEmail;
        this.checkoutDate = checkoutDate;
        this.returnDate = returnDate;
        this.bookId = bookId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;

    @Column(name = "UserEmail")
    private String userEmail;

    @Column(name = "CheckoutDate")
    private String checkoutDate;

    @Column(name = "ReturnDate")
    private String returnDate;

    @Column(name = "BookId")
    private Long bookId;
}
