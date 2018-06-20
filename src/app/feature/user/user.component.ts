import {Component} from '@angular/core'

@Component({
    // Selector is the name of the component when importing the component through
    // A separate Module. See the app.module.ts and the app.component.html files.
    selector: 'app-user',

    // Can make the template be rendered from a separate HTML through templateUrl
    // rather than coding the entire template here within this component.
    templateUrl: './user.component.html',
    // template: '<h2>Raf</h2>',

    // Can import the stylesheets similarly. Must be an array 
    // for the case of multiple stylesheets.
    styleUrls: ['./user.component.css']
    // Aleternative styles straight into the Component: 
    // styles: [
    //     //Backticks
    //     `
    //         h2 { 
    //             color: orange;
    //         }
    //         .awesomeColor {
    //             color: pink;
    //         }
    //     `
    // ]
})

export class UserComponent {
    // Properties (can specify type)
    firstName : string;
    lastName : string;
    age: number; 
    address; // I'm not sure if you can specify the type(s) of an object...
    foo: any; // Can be any type
    isAwesome: boolean;
    numberArray : number[] // Array of numbers
    anyArray : any[] // Array of mixed types
    myTuple : [string, number, number] // Basically like a mapped array
    pointlessVar : void // Can't really do anything...void primarily used for return types
    noUse: undefined; // No idea why this would be used...but you could do it anyways
    nullify: null; // Can use null if needed

    // Methods
    constructor(){
        this.firstName = "Raf";
        this.lastName = "Valdez";
        this.age = 10; 
        this.address = {
            street: "Candy Cane Lane",
            city: "Denver",
            state: "Colorado"
        };
        this.numberArray = [123, 123, 456, 789];
        this.anyArray = ["stuff", 1, 2, true, {}];
        this.myTuple = ["a string!", 1, 2];
        this.pointlessVar = undefined;
        this.noUse = undefined;
        this.nullify = null;

        this.sayingHi();
        console.log("UserComponent this.age before this.hasBirthday() is called: " + this.age);
        this.hasBirthday();
        console.log("UserComponent this.age after this.hasBirthday() is called: " + this.age);

        // Calling addNums where parameters have types as well
        console.log(this.addNums(1, 7));


    }
    // There are also lifecycle methods such as ngOnInit which should be
    // used to call any ajax/service calls or anything of that sort. 
    // The constructor is mostly used to inject dependencies. If we wanted
    // to bring in a data service, we would inject it within the constructors'
    // parameters. 
    // Of course, we can create our own methods within our component (can specify
    // return type, as well).
    sayingHi(): void {
        // To access Properties, "this" must be included
        console.log("Hello " + this.firstName);
        // Or for a fancy ES6 way:
        // console.log(`Hello ${this.firstName}`);

        // When calling the function, you must also prepend the "this" operator
    }
    // Change in the properties through methods also can persist through the
    // component's lifecycle
    hasBirthday(): void {
        this.age++;
    }

    stringInterpolationMethodReturn() : string {
        return "This method returned a string!";
    }

    // Parameters can also have types
    addNums(firstNum: number, secondNum: number): number {
        return firstNum + secondNum;
    }

}