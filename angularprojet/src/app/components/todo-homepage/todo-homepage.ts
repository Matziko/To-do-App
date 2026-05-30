import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ɵɵDir } from "@angular/cdk/scrolling";

@Component({
  selector: 'app-todo-homepage',
  imports: [CommonModule, RouterLink, ɵɵDir],
  templateUrl: './todo-homepage.html',
  styleUrl: './todo-homepage.scss',
})
export class TodoHomepage {
}
