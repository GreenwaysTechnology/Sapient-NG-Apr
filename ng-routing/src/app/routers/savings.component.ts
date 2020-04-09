import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-savings',
    template: `
        <h1>Savings Accounts</h1>
               
    `
})
export class SavingsAccountsComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}