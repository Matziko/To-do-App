package com.example.todoapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

    @Entity
    @Table(name = "todos")
    @Data
    public class Todo {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String task;
        private String description;
        private LocalDateTime deadline;
        private String status;
        private String priority;
        private LocalDateTime createAt;

        @PrePersist
        protected void onCreate(){
        this.createAt= LocalDateTime.now();
            if(this.priority == null){
            this.priority = "low";
            }
            if(this.status == null){
                this.status = "to-do";
            }


        }

    }
