package com.richardz02.devdiary.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.richardz02.devdiary.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, UUID> {}

    
