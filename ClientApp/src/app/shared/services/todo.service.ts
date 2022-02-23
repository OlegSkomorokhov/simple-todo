import { Injectable } from '@angular/core';
import { KeyValue } from '..';

@Injectable({
  providedIn: 'root'
})
export class TodoService
{

  todo_categories: KeyValue[] = [
    new KeyValue(1, 'Сегодня'),
    new KeyValue(2, 'Завтра'),
    new KeyValue(3, 'На этой неделе')
  ]

  constructor() { }

  getCategories(): KeyValue[]
  {
    return this.todo_categories;
  }

}
