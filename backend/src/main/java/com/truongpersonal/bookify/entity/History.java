package com.truongpersonal.bookify.entity;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "History")
@Data
public class History {

    public History(){}

    public History(String userEmail, String checkoutDate, String returnedDate, String title,
                   String author, String description, String img) {
        this.userEmail = userEmail;
        this.checkoutDate = checkoutDate;
        this.returnedDate = returnedDate;
        this.title = title;
        this.author = author;
        this.description = description;
        this.img = img;
    }

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="UserEmail")
    private String userEmail;

    @Column(name="CheckoutDate")
    private String checkoutDate;

    @Column(name="ReturnedDate")
    private String returnedDate;

    @Column(name="Title")
    private String title;

    @Column(name="Author")
    private String author;

    @Column(name="Description")
    private String description;

    @Column(name="Img")
    private String img;
}












