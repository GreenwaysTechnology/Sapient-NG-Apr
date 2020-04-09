import { Component } from '@angular/core';



@Component({
    selector: 'app-admin',
    template: `
           <h1>Admin Component</h1>
           <button (click)="generate()">Generate Token</button>
           <app-adminchild [token]="token"> </app-adminchild>
    `
})
export class AdminComponent {
    token: string;
    ngOnInit() {
        console.log('Admin init is called')
        this.token = Math.random().toString();

    }
    generate() {
        this.token = Math.random().toString();

    }
    ngOnDestroy() {
        console.log('Admin to destry component')
    }
}