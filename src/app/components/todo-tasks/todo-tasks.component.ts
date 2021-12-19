import { Component } from '@angular/core';
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

  filterValues: ToDoItem = new ToDoItem();

  setFilterValues(filter: ToDoItem)
  {
    this.filterValues = new ToDoItem(filter.CategoryId, filter.CategoryName, filter.Text);
  }

  addToDo(item: ToDoItem)
  {
    this.todo_items = this.todo_items.concat([ item ]);
  }

  deleteToDo(item: ToDoItem)
  {
    this.todo_items = this.todo_items.filter(i => i.Text != item.Text);
  }

}
