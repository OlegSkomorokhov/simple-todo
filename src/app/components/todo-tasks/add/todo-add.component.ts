import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyValue, ToDoItem, TodoService } from '../../../shared';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html'
})
export class TodoAddComponent implements OnInit
{
  @Input() value: ToDoItem = new ToDoItem();
  @Input() showModels: boolean = false;

  @Output() add: EventEmitter<ToDoItem> = new EventEmitter();

  todo_categories: KeyValue[] = [];

  constructor(
    private todo: TodoService
  ) { }

  ngOnInit(): void
  {
    this.todo_categories = this.todo.getCategories();
  }

  categoryChanged()
  {
    if (this.value && this.value.CategoryId)
    {
      this.value.CategoryName = this.todo_categories.find(c => c.Key == this.value.CategoryId)?.Value;
    }
  }

  addItem()
  {
    this.add.emit(
      new ToDoItem(
        this.value.CategoryId,
        this.value.CategoryName,
        this.value.Text));

    this.value = new ToDoItem();
  }

}
