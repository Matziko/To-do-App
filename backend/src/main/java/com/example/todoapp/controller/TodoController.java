package com.example.todoapp.controller;

import com.example.todoapp.model.Todo;
import com.example.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/todos")
    @CrossOrigin(origins = "http://localhost:4200")
    public class TodoController {

        @Autowired
        private TodoRepository todoRepository;

        @GetMapping
        public List<Todo> getAllTodos() {
            return todoRepository.findAll();
        }

        @PostMapping
        public Todo createTodo(@RequestBody Todo todo) {
            return todoRepository.save(todo);
        }

        @PutMapping("/{id}")
        public Todo updateTodo(@PathVariable Long id, @RequestBody Todo todoDetails) {
            Todo todo = todoRepository.findById(id).orElseThrow();
            todo.setTask(todoDetails.getTask());
            todo.setDescription(todoDetails.getDescription());
            todo.setStatus(todoDetails.getStatus());
            todo.setPriority(todoDetails.getPriority());
            todo.setDeadline(todoDetails.getDeadline());
            return todoRepository.save(todo);
        }

        @DeleteMapping("/{id}")
        public void deleteTodo(@PathVariable Long id){
            System.out.println("Deleting ID from DB: " + id);
            todoRepository.deleteById(id);
        }

        @DeleteMapping("/completed")
        public ResponseEntity<Void> clearCompletedTodos() {
            return ResponseEntity.noContent().build();
        }
    }

