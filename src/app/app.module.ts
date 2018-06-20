import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './feature/user/user.component';
import { PersonComponent } from './feature/person/person.component';
import { TestComponent } from './test/test.component'; // Added through the CLI

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PersonComponent,
    TestComponent // Added through the CLI
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
