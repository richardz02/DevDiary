package com.richardz02.devdiary.mapper;

import org.springframework.stereotype.Component;

import com.richardz02.devdiary.dto.note.NoteRequestDTO;
import com.richardz02.devdiary.dto.note.NoteResponseDTO;
import com.richardz02.devdiary.model.Note;

@Component
public class NoteMapper {
    public Note toEntity(NoteRequestDTO dto) {
        return new Note(dto.getTitle(), dto.getBody());
    }

    public NoteResponseDTO toResponseDTO(Note note) {
        return new NoteResponseDTO(note.getNoteId(), note.getDate(), note.getTitle(), note.getBody());
    }
}
