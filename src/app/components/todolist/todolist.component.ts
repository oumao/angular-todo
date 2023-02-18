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

 
  constructor(private todoService: TodoService){  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res.slice(0, 7) as Todo[]
    })
  }

  onRemoveTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
  }

}
