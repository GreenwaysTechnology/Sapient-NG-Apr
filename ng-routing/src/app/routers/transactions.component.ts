import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../services/transactions.service';


@Component({
    selector: 'app-transction',
    template: `
        <h1>Transactions</h1>
        <a *ngFor="let transaction of transactions" routerLink="/transactions/{{transaction.id}}">
        <div>
          <h4>{{transaction.id}} - {{transaction.desc}}</h4>
        </div>
      </a>
      

               
    `
})
export class TransactionsComponent {
    transactions: any[];
    constructor(private routerState: ActivatedRoute, private service: TransactionService) { }
    ngOnInit() {
        this.service.findAll().subscribe(transactions => {
            this.transactions = transactions;
        });
    }
}