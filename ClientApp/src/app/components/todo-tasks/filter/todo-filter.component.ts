import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItem } from 'src/app/shared';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html'
})
export class TodoFilterComponent
{
  @Input() showModels: boolean = false;

  @Output() submit: EventEmitter<ToDoItem> = new EventEmitter();

  values: ToDoItem = new ToDoItem();

  Submit()
  {
    this.submit.emit(this.values);
  }

}
