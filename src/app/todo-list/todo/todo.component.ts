import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todos: Todo = []

  constructor(private todoService: TodoService){}

  getTodos(){
    return this.todoService.getTodos();
  }
}
