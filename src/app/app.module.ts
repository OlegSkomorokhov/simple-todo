import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TodoTasksComponent } from './components';
import { TodoListComponent } from './components/todo-tasks/list/todo-list.component';
import { TodoAddComponent } from './components/todo-tasks/add/todo-add.component';

import { TodoService } from './shared/services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoTasksComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
