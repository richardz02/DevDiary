package com.richardz02.devdiary.dto.note;

import java.time.LocalDate;
import java.util.UUID;

public class NoteResponseDTO {
    private UUID noteId;
    private LocalDate date;
    private String title;
    private String body;

    public NoteResponseDTO(UUID noteId, LocalDate date, String title, String body) {
        this.noteId = noteId;
        this.date = date;
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
}
