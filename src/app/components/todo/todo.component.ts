import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { DoneTodosService } from 'src/app/services/done-todos.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo: Todo 

  @Output() removeTodo = new EventEmitter<number>();
  
  isComplete: boolean = false

  constructor(private doneService: DoneTodosService){
    this.todo = {id: 0, title: "", completed: false}
  }
  
  todoCompleted(event: any): void {
    event === true? this.todo.completed = true : this.todo.completed = false
  }

  removeToDO(id: number): void {
    this.removeTodo.emit(id);
  }
}
