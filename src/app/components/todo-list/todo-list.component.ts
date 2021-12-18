import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../../shared/models/todo.item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit
{

  @Input() items: ToDoItem[] = [];
  @Output() delete: EventEmitter<ToDoItem> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void
  {

  }

  deleteItem(item: ToDoItem): void
  {
    this.delete.emit(item);
  }

}
