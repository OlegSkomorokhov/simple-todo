import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../../shared/models/todo.item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  @Input() items: ToDoItem[] = [];
  @Output() edit: EventEmitter<ToDoItem> = new EventEmitter();
  @Output() delete: EventEmitter<ToDoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editItem(item: ToDoItem)
  {
    this.edit.emit(item);
  }

  deleteItem(item: ToDoItem)
  {
    this.delete.emit(item);
  }

}
