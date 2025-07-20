package com.truongpersonal.bookify.entity;


import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Messages")
@Data
public class Message {

    public Message(){}

    public Message(String title, String question) {
        this.title = title;
        this.question = question;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Long id;

    @Column(name="UserEmail")
    private String userEmail;

    @Column(name="Title")
    private String title;

    @Column(name="Question")
    private String question;

    @Column(name="AdminEmail")
    private String adminEmail;

    @Column(name="Response")
    private String response;

    @Column(name="Closed")
    private boolean closed;
}













