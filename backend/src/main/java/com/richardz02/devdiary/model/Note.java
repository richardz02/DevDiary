package com.richardz02.devdiary.model;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID noteId; // Primary key, automatically generated
    private LocalDate createdAt;
    private String title;
    private String body; 

    // Constructors
    public Note() {} // JPA needs public zero-args constructor to instantiate the entity when loading from the db

    public Note(String title, String body) {
        this.createdAt = LocalDate.now();
        this.title = title;
        this.body = body;
    }

    // Getters
    public UUID getNoteId() {
        return noteId;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }
    
    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    // Setters
    public void setTitle(String title) {
        this.title = title;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
