import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo_component/todo_component';
import { TodoInputComponent } from './components/todo_input/todo_input';
import { TodoHomepage } from './components/todo-homepage/todo-homepage';

export const routes: Routes = [
    {
        path:"todomain",
        component:TodoComponent
    },
    {
        path:"",
        component:TodoHomepage
    },
    {
        path:"createtodo",
            component:TodoInputComponent
        }
];
