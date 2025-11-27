package com.richardz02.devdiary.dto.note;

import jakarta.validation.constraints.NotBlank;

public class NoteRequestDTO {
    @NotBlank(message = "Title cannot be blank")
    private String title;
    
    @NotBlank(message = "Body cannot be blank")
    private String body; 

    // Getters
    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }
}
