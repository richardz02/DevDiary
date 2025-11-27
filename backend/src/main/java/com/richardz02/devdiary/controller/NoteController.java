package com.richardz02.devdiary.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.richardz02.devdiary.dto.ApiResponse;
import com.richardz02.devdiary.dto.note.NoteRequestDTO;
import com.richardz02.devdiary.dto.note.NoteResponseDTO;
import com.richardz02.devdiary.service.NoteService;

@RestController
@RequestMapping("/api/v1")
public class NoteController {
    
    /* 
     * Dependency Injection:
     * - NoteService
     */
    private final NoteService noteService;
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/")     
    public String home() {
        return "Welcome to my Dev Diary";
    }

    @GetMapping("/notes")
    public ResponseEntity<ApiResponse<List<NoteResponseDTO>>> getAllNotes() {
        List<NoteResponseDTO> noteResponseDTOs = noteService.getAllNotes();

        ApiResponse<List<NoteResponseDTO>> response = new ApiResponse<List<NoteResponseDTO>>("Success", noteResponseDTOs);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/notes")
    public ResponseEntity<ApiResponse<NoteResponseDTO>> addNote(@RequestBody NoteRequestDTO addNoteRequest) {
        NoteResponseDTO noteResponseDTO = noteService.addNote(addNoteRequest);

        // Construct API response with data type NoteResponseDTO
        ApiResponse<NoteResponseDTO> response = new ApiResponse<NoteResponseDTO>("Success", noteResponseDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping("/notes/{noteId}")
    public ResponseEntity<ApiResponse<NoteResponseDTO>> updateNote(@PathVariable UUID noteId, @RequestBody NoteRequestDTO updateNoteRequest) {
        NoteResponseDTO noteResponseDTO = noteService.updateNote(noteId, updateNoteRequest);

        // Construct API response with data type NoteResponseDTO
        ApiResponse<NoteResponseDTO> response = new ApiResponse<NoteResponseDTO>("Success", noteResponseDTO);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    }

    @DeleteMapping("/notes/{noteId}")
    public ResponseEntity<ApiResponse<Void>> deleteNote(@PathVariable UUID noteId) {
        noteService.deleteNote(noteId);

        ApiResponse<Void> response = new ApiResponse<Void>("Delete success", null);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
