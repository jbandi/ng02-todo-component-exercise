import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OverviewComponent} from './todos/components/overview.component';
import {ToDoService} from './todos/model/todo.service';
import {NewTodoComponent} from './todos/components/new-todo/new-todo.component';
import {DoneTodosComponent} from './todos/components/done-todos.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NewTodoComponent,
    DoneTodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ToDoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
