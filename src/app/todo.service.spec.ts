import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

let service: TodoService;
describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should start with no todos', () => {
    expect(service.todos.length).toBe(0);
  });
  it('should add a todo when addTodo() is called', () => {
    let todo = {name: "Dummy Todo", id: 1, mark: "incomplete"};
    service.addTodo(todo);
    expect(service.todos[0]).toBe(todo);
    expect(service.todos.length).toBe(1);
  });
  it('should remove a todo when removeTodo() is called', () => {

  });
  it('should edit todo based off id', () => {

  });
  it('should mark todo complete when markTodo() function is called', () => {
    service.todos = [{name: "Dummy Todo", id: 1, mark: "incomplete"}];
    service.markTodo(1);
    expect(service.todos[0]["mark"]).toBe("complete");
  });
});
