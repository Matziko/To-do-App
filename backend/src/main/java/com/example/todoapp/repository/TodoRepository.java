
    package com.example.todoapp.repository;

import com.example.todoapp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.transaction.annotation.Transactional;

    @Repository
    public interface TodoRepository extends JpaRepository<Todo, Long> {
        // Spring generates all the Save/Delete code automatically!
           @Transactional
        void deleteByStatus(String status);
    }


