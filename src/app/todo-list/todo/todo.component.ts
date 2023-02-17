import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: any
  // @Output() clickHandler = new EventEmitter()

  // handleClick(){
  //   this.clickHandler.emit(this.todo.id)
  // }
}
