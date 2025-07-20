package com.truongpersonal.bookify.entity;

import lombok.Data;
import jakarta.persistence.*;

@Entity
@Table(name = "Book")
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;

    @Column(name = "Title")
    private String title;

    @Column(name = "Author")
    private String author;

    @Column(name = "Description")
    private String description;

    @Column(name = "Copies")
    private int copies;

    @Column(name = "CopiesAvailable")
    private int copiesAvailable;

    @Column(name = "Category")
    private String category;

    @Column(name = "Img")
    private String img;
}
