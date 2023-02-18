import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoComponent } from './components/todo/todo.component';
import { DoneTodosComponent } from './components/done-todos/done-todos.component'
import { PendingTodoComponent } from './components/pending-todo/pending-todo.component'

const routes: Routes = [
  {path: "", component: TodolistComponent},
  {path: "completed", component: DoneTodosComponent},
  {path: "pending", component: PendingTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
