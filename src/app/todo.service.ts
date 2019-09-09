import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Object[] = [];

  constructor() { }

  addTodo(todo){
    this.todos = [...this.todos, ...todo];
  }
  markTodo(num){
    if (num === 1){
      return "complete";
    } else if (num === 0){
      return "incomplete";
    }
  }
  editTodo(id, val){
    let todo = this.todos.filter(todo => todo["id"] = id);
    todo["title"] = val;
  }
}
// Stores todos
// Update todos based off functionality in the component