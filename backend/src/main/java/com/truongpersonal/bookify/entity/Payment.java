package com.truongpersonal.bookify.entity;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name = "Payment")
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;

    @Column(name="UserEmail")
    private String userEmail;

    @Column(name = "Amount")
    private double amount;
}
