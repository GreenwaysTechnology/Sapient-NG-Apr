import { Component, Input, SimpleChange } from '@angular/core';



@Component({
    selector: 'app-adminchild',
    template: `
           <h1>Admin Child Component</h1>
           <pre>
                    {{changes | json}}
           </pre>
           <h1>
               Current Token {{cur}} Previous Token {{prev}}
           </h1>
    `
})
export class AdminChildComponent {
    @Input()
    token: string;
    cur;
    prev;
    changes;

    //to track dynamic properties
    ngOnChanges(changes: SimpleChange) {
        this.changes = changes;
        for (let propName in changes) {
            let chng = changes[propName];
            this.cur = JSON.stringify(chng.currentValue);
            this.prev = JSON.stringify(chng.previousValue);
        }
    }
    ngOnInit() {
        console.log('AdminChildComponent init is called')
    }
    ngOnDestroy() {
        console.log('AdminChildComponent destroy is called')

    }
}