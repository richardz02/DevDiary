package com.richardz02.devdiary.service;

import org.springframework.stereotype.Service;

import com.richardz02.devdiary.dto.note.NoteDTO;
import com.richardz02.devdiary.model.Note;
import com.richardz02.devdiary.repository.NoteRepository;

@Service
public class NoteService {
    private final NoteRepository noteRepository; 

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

}
