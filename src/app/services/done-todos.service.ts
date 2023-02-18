import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class DoneTodosService {
  todoStore: Storage = window.localStorage
  constructor() { }

  addToDone(todos: Todo[]): void {
    const str = JSON.stringify(todos.map(todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    })))
    this.todoStore.setItem('Dones', str);
  }

  getToDones(): Todo[] {
    const getTodo = this.todoStore.getItem('Dones');
    return getTodo ? JSON.parse(getTodo) : [];
  }

  removeFromDone(): void {
    this.todoStore.removeItem('done');
  }
}
