import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-loan',
    template: `
        <h1>Loan Accounts</h1>
               
    `
})
export class LoanAccountsComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}