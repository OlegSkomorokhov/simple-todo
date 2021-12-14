import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../todo.item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
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
