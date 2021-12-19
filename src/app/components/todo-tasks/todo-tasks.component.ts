import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/shared';

@Component({
  selector: 'todo-tasks',
  templateUrl: './todo-tasks.component.html'
})
export class TodoTasksComponent {

  todo_items: ToDoItem[] = [
    new ToDoItem(1, 'Сегодня', 'Task 1'),
    new ToDoItem(1, 'Сегодня', 'Task 2'),
    new ToDoItem(1, 'Сегодня', 'Task 3')
  ];

  constructor() { }

  addToDo(item: ToDoItem)
  {
    this.todo_items.push(item);
  }

  deleteToDo(item: ToDoItem)
  {
    this.todo_items.splice(this.todo_items.indexOf(item), 1);
  }

}
