import {Component} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div myHightlight>
            Highlight me
        </div>
        <br>
        <div myHightlight="">
            Another Highlight
        </div>
    `,
    directives: [HighlightDirective]
})
export class AttributeDirectivesComponent {

}