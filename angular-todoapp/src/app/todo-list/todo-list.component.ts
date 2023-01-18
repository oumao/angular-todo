import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        "id": 1,
        "title": "Reading",
        "isDone": false
      },
      {
        "id": 2,
        "title": "Washing",
        "isDone": false
      },
      {
        "id": 3,
        "title": "Cooking",
        "isDone": false
      }
    ]
  }
}
