import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{

  todos: Todo[] = []
  todo: string = ""

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
      this.todoService.getTodos().subscribe( res => {
        console.log(res);
        this.todos = res as Todo[]
       } )
  }
}
