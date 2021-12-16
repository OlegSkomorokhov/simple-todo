import { Component } from '@angular/core';
import { ToDoItem } from './shared/models/todo.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Simple-ToDo';

  itemsToDo: ToDoItem[] = [ new ToDoItem('Task 1'), new ToDoItem('Task 2'), new ToDoItem('Task 3') ];

  addItemToArray(item: ToDoItem)
  {
    this.itemsToDo.push(item);
  }

  deleteItemFromArray(item: ToDoItem)
  {
    this.itemsToDo.splice(this.itemsToDo.indexOf(item), 1);
  }

}
