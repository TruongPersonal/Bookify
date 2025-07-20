package com.truongpersonal.bookify.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Review")
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;

    @Column(name = "UserEmail")
    private String userEmail;

    @Column(name = "Date")
    @CreationTimestamp
    private Date date;

    @Column(name = "Rating")
    private double rating;

    @Column(name = "BookId")
    private Long bookId;

    @Column(name = "ReviewDescription")
    private String reviewDescription;










}
