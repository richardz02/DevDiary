package com.richardz02.devdiary.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.richardz02.devdiary.dto.note.NoteRequestDTO;
import com.richardz02.devdiary.dto.note.NoteResponseDTO;
import com.richardz02.devdiary.mapper.NoteMapper;
import com.richardz02.devdiary.model.Note;
import com.richardz02.devdiary.repository.NoteRepository;

@Service
public class NoteService {
    
    /*
     * Dependency Injection:
     * - NoteRepository 
     * - NoteMapper
     */
    private final NoteRepository noteRepository; 
    private final NoteMapper noteMapper;
    public NoteService(NoteRepository noteRepository, NoteMapper noteMapper) {
        this.noteRepository = noteRepository;
        this.noteMapper = noteMapper;
    }

    public List<NoteResponseDTO> getAllNotes() {
        List<Note> notes = noteRepository.findAll();

        List<NoteResponseDTO> noteResponseDTOs = notes.stream()
                                                      .map(note -> {
                                                        NoteResponseDTO noteResponseDTO = noteMapper.toResponseDTO(note);
                                                        return noteResponseDTO;
                                                      })
                                                      .toList();

        return noteResponseDTOs;
    }

    public NoteResponseDTO addNote(NoteRequestDTO noteRequestDTO) {
        // Construct the Note entity from request DTO
        Note note = noteMapper.toEntity(noteRequestDTO);
        
        // Save note to database
        noteRepository.save(note);

        // Construct the response DTO from the Note entity and return
        NoteResponseDTO noteResponseDTO = noteMapper.toResponseDTO(note);
        return noteResponseDTO;
    }

    public NoteResponseDTO updateNote(UUID noteId, NoteRequestDTO noteRequestDTO) {
        // Find the note in the database by note id
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new IllegalArgumentException());

        // Reset fields 
        note.setTitle(noteRequestDTO.getTitle());
        note.setBody(noteRequestDTO.getBody());

        // Save updated note
        noteRepository.save(note);

        // Construct response DTO and return
        NoteResponseDTO noteResponseDTO = noteMapper.toResponseDTO(note);
        return noteResponseDTO;
    }

    public void deleteNote(UUID noteId) {
        // Find the note in the database by note id
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new IllegalArgumentException());

        noteRepository.delete(note);
    }
}
