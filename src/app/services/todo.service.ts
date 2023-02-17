import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = []
  constructor() { 
    this.todos = [
      {
        id: 1,
        title: 'Buy milk',
        isDone: false
      },
      {
        id: 2,
        title: 'Buy groceries',
        isDone: false
      },{
        "id": 3,
        "title": "Reading",
        "isDone": false
      },
      {
        "id": 4,
        "title": "Washing",
        "isDone": false
      },
      {
        "id": 5,
        "title": "Cooking",
        "isDone": false
      }

    ]
  }

  getTodos(){
    return this.todos;
  }
}
