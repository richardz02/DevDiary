package com.richardz02.devdiary.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.richardz02.devdiary.dto.ApiResponse;
import com.richardz02.devdiary.dto.note.NoteDTO;
import com.richardz02.devdiary.service.NoteService;

@RestController
@RequestMapping("/api/v1")
public class NoteController {
    
    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/")     
    public String home() {
        return "Welcome to my Dev Diary";
    }
}
