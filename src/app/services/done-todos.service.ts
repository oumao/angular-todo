import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoneTodosService {
  todoStore: Storage = window.localStorage
  private todoUpdated = new Subject<void>();

  todoUpdated$ = this.todoUpdated.asObservable();

  constructor() { }

  addToDone(todo: Todo): void {
    const doneTodos = this.getToDones();

    doneTodos.push(todo);

    const str = JSON.stringify(doneTodos);
    this.todoStore.setItem('Dones', str);
  }

  updateTodo(){
    this.todoUpdated.next();
  }

  getToDones(): Todo[] {
    const getTodo = this.todoStore.getItem('Dones');
    return getTodo ? JSON.parse(getTodo) : [];
  }

  removeFromDone(): void {
    this.todoStore.removeItem('done');
  }
}
