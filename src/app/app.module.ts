import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './feature/user/user.component';
import { PersonComponent } from './feature/person/person.component';
import { TestComponent } from './test/test.component';
import { PeopleComponent } from './feature/people/people.component'; // Added through the CLI

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PersonComponent,
    TestComponent,
    PeopleComponent // Added through the CLI
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
