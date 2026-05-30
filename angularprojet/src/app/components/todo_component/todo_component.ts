import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';
import { TodoListLogicService } from '../../services/todo_component.service';
import { CdkDragDrop, CdkDrag, CdkDropList,CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { RouterLink } from "@angular/router";
import { TodoInputComponent } from '../todo_input/todo_input';


  @Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo_component.html',
  styleUrls: ['./todo_component.scss'],
  imports: [CommonModule, CdkDropListGroup, CdkDropList, CdkDrag, RouterLink, TodoInputComponent]
})


export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todoList: Todo[] = [];
  doingList: Todo[] = [];
  doneList: Todo[] = [];
showPopup = false;
  constructor(private todoService: TodoService) {}

ngOnInit() {
    this.todoService.todos$.subscribe((todos: Todo[]) => {

      this.todoList=[];
      this.doingList=[];
      this.doneList=[];
      
    todos.forEach(todo => {
      if (todo.status === 'to-do') {
        this.todoList.push(todo);
      } else if (todo.status === 'doing') {
        this.doingList.push(todo);
      } else if (todo.status === 'done') {
        this.doneList.push(todo);
      }
    });
  });

  this.todoService.fetchTodos();
}


    drop(event: CdkDragDrop<Todo[]>) {
      console.log('Target Container ID:', event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const movedTodo = event.container.data[event.currentIndex];
      console.log('Status before change:', movedTodo.status);
      if (movedTodo) {
        if (event.container.id === 'todo-list') {
          console.log('Dropping into:', event.container.id);
          movedTodo.status = 'to-do';
        } else if (event.container.id === 'doing-list') {
          console.log('Dropping into:', event.container.id);
          movedTodo.status = 'doing';
        } else if (event.container.id === 'done-list') {
          console.log('Dropping into:', event.container.id);
          movedTodo.status = 'done';
        }
console.log('Status after change:', movedTodo.status);
        this.todoService.updateTodo(movedTodo);

      }
    }
  }
  deleteTodo(id: number | undefined) {
    if (id) { this.todoService.deleteTodo(id);} 
  this.todoList = this.todoList.filter(todo => todo.id !== id);
    this.doingList = this.doingList.filter(todo => todo.id !== id);
    this.doneList = this.doneList.filter(todo => todo.id !== id);
  
  }
  toggleDescription(item: any) {
    item.showDescription = !item.showDescription;
  }
  
}
