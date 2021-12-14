import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../todo.item';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Input() value: ToDoItem = new ToDoItem();
  @Output() add: EventEmitter<ToDoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addItem()
  {
    this.add.emit(new ToDoItem(this.value.Text));
    this.value = new ToDoItem();
  }

  editItem()
  {
    this.value = new ToDoItem();
  }

}
