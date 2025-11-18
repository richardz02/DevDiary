package com.richardz02.devdiary.model;

import java.time.LocalDate;
import java.util.UUID;

public class Note {
    private UUID noteId;
    private LocalDate date;
    private String title;
    private String body; 

    // Constructors
    public Note(LocalDate date, String title, String body) {
        this.noteId = UUID.randomUUID();
        this.date = LocalDate.now();
        this.title = title;
        this.body = body;
    }

    // Getters
    public UUID getNoteId() {
        return noteId;
    }

    public LocalDate getDate() {
        return date;
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
