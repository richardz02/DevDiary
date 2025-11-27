package com.richardz02.devdiary.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.richardz02.devdiary.dto.note.NoteRequestDTO;
import com.richardz02.devdiary.dto.note.NoteResponseDTO;
import com.richardz02.devdiary.exceptions.ResourceNotFoundException;
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
        Note saved = noteRepository.save(note);

        // Return the note response dto
        return noteMapper.toResponseDTO(saved);
    }

    public NoteResponseDTO updateNote(UUID noteId, NoteRequestDTO noteRequestDTO) {
        // Find the note in the database by note id
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new ResourceNotFoundException("Note with id: " + noteId + " not found."));

        // Reset fields 
        note.setTitle(noteRequestDTO.getTitle());
        note.setBody(noteRequestDTO.getBody());

        // Save updated note
        Note saved = noteRepository.save(note);

        // Return the note response dto
        return noteMapper.toResponseDTO(saved);
    }

    public void deleteNote(UUID noteId) {
        // Check if the note to be deleted exists in the database
        if (!noteRepository.existsById(noteId)) {
            throw new ResourceNotFoundException("Note with id: " + noteId + " not found.");
        }

        // Delete note by id
        noteRepository.deleteById(noteId);
    }
}
