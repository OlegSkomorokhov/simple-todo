import { Component } from '@angular/core';
import { ToDoItem } from './shared/models/todo.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Simple-ToDo';

  todo_items: ToDoItem[] = [ new ToDoItem('Task 1'), new ToDoItem('Task 2'), new ToDoItem('Task 3') ];

  addToDo(item: ToDoItem)
  {
    this.todo_items.push(item);
  }

  deleteToDo(item: ToDoItem)
  {
    this.todo_items.splice(this.todo_items.indexOf(item), 1);
  }

}
