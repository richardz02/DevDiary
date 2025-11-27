package com.richardz02.devdiary.handler;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.richardz02.devdiary.exceptions.ConflictException;
import com.richardz02.devdiary.exceptions.ResourceNotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFound(ResourceNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error(e));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidation(MethodArgumentNotValidException e) {
        String msg = e.getBindingResult()
                      .getAllErrors()
                      .get(0)
                      .getDefaultMessage();
        
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error(msg));
    }

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<?> handleConflict(ConflictException e) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error(e));
    }

    private Map<String, String> error(String message) {
        return Map.of("error", message);
    }

    private Map<String, String> error(Exception e) {
        return Map.of("error", e.getMessage());
    }
}