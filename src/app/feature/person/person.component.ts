import {Component} from '@angular/core'

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css'],
})

// For OnInit, to be recognized, be sure to import it along with
// "Component" from @angular/core. In addtion, to implement, create
// a method called ngOnInit() which is a lifecycle method that is 
// ran before the component mounts but after the constructor is ran.\
export class PersonComponent{

    // Properties
    firstName : string;
    lastName : string;
    age : number;

    constructor(){
        console.log("PersonComponent Rendering");
    }
}