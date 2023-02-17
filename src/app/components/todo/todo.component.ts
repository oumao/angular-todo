import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo: Todo 

  constructor(){
    this.todo = {id: 0, title: "", completed: false}
  }
  

}
