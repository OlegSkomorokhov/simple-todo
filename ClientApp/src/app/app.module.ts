import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TodoAddComponent, TodoFilterComponent, TodoListComponent, TodoTasksComponent } from './components';
import { CheckService, TodoService } from './shared';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodoService,
    CheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
