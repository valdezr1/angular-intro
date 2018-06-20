import { Component, OnInit } from '@angular/core';

import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  //Properties
  people : PersonComponent[];

  constructor() { }

  ngOnInit() {
  
    this.people = [
      {
        firstName : "jank",
        lastName : "jank",
        age: 1
      },
      {
        firstName: "garbage",
        lastName: "garbager",
        age: 2
      },
      {
        firstName: "dora",
        lastName: "explorer",
        age: 22
      }
    ];
  }

}
