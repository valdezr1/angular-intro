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
  showExtended: boolean; // Todo: Toggle with button
  disabledBtn : boolean = true; // Property Bound Button bound with "disabled" attribute

  constructor() { }

  ngOnInit() {
    this.showExtended = true;
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

  // Todo: Going to implement a button to invoke this, and forms to add a person
  addPerson(person : PersonComponent){
    this.people.unshift(person);
  }

}
