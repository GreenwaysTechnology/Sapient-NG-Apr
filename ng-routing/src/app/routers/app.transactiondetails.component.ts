import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../services/transactions.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-transactiondetails',
    template: `
        <h1>Transactions Details</h1>
        <pre>{{transaction | async | json}}</pre>
        <button (click)="goToTransaction()">Transctions</button>
               
    `
})
export class TransactionsDetailsComponent {
    transactionId: number;
    transaction: Observable<any[]>;
    constructor(private routerState: ActivatedRoute, private location: Location, private service: TransactionService) { }
    ngOnInit() {
        this.routerState.params.subscribe(info => {
            this.transactionId = info.id;

            //invoke transaction service
            this.transaction = this.service.getTransactionByid(info.id);

        });

    }
    goToTransaction() {
        this.location.back();
    }
}