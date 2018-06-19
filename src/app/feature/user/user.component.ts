import {Component} from '@angular/core'

@Component({
    // Selector is the name of the component when importing the component through
    // A separate Module. See the app.module.ts and the app.component.html files.
    selector: 'app-user',

    // Can make the template be rendered from a separate HTML through templateUrl
    // rather than coding the entire template here within this component.
    templateUrl: './user.component.html',
    //template: '<h2>Raf</h2>',

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
    
}