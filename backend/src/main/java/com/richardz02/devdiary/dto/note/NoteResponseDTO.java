package com.richardz02.devdiary.dto.note;

import java.time.LocalDate;
import java.util.UUID;

public class NoteResponseDTO {
    private UUID noteId;
    private LocalDate createdAt;
    private String title;
    private String body;

    public NoteResponseDTO(UUID noteId, LocalDate createdAt, String title, String body) {
        this.noteId = noteId;
        this.createdAt = createdAt;
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
}
