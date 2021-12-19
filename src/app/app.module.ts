import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TodoAddComponent, TodoFilterComponent, TodoListComponent, TodoTasksComponent } from './components';
import { TodoService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    TodoTasksComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoFilterComponent
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
