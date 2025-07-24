package com.truongpersonal.bookify.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "review")
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "userEmail")
    private String userEmail;

    @Column(name = "date")
    @CreationTimestamp
    private Date date;

    @Column(name = "rating")
    private double rating;

    @Column(name = "bookId")
    private Long bookId;

    @Column(name = "reviewDescription")
    private String reviewDescription;










}
