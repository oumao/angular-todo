import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DoneTodosService } from 'src/app/services/done-todos.service'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-done-todos',
  templateUrl: './done-todos.component.html',
  styleUrls: ['./done-todos.component.css']
})
export class DoneTodosComponent implements OnInit {

  doneTodos: Todo[] = []

  @Output() updatedTodos = new EventEmitter<Todo>();

  constructor(private doneService: DoneTodosService){

  }

  ngOnInit(): void {
    this.doneTodos = this.doneService.getToDones();
  }
}
