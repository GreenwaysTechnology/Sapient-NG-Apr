import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-accounts',
    template: `
        <h1>Accounts</h1>
        <nav>
        <!--/accounts/savingsAccount -->
            <a [routerLink]="['./savingsAccount']">Savings Account</a> |
            <a [routerLink]="['./loanAccount']">LoanAccount</a>
        </nav>
        <router-outlet></router-outlet>
       
    `
})
export class AccountsComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}