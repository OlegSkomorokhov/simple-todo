import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToDoItem } from '../../../shared/models/todo.item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit, OnChanges
{

  @Input() items: ToDoItem[] = [];
  @Input() filterValues: ToDoItem = new ToDoItem();

  @Output() delete: EventEmitter<ToDoItem> = new EventEmitter();

  visible_items: ToDoItem[] = [];

  ngOnInit(): void
  {
    this.visible_items = this.items.map(i => i);
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes['items'])
    {
      this.visible_items = this.items.map(i => i);
    }

    if (changes['filterValues'])
    {
      this.updateVisibleItems(this.filterValues);
    }
  }

  updateVisibleItems(filter: ToDoItem)
  {
    if (filter && filter.Text && filter.Text.length > 0)
    {
      this.visible_items = this.items.filter(i => i.Text?.includes(filter.Text as string));
    }
    else
    {
      this.visible_items = this.items.map(i => i);
    }
  }

  deleteItem(item: ToDoItem): void
  {
    this.delete.emit(item);
  }

}
