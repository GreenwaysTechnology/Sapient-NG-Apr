import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const transactions: any[] = [
    {
        id: 1, date: new Date(), desc: 'NEFT-Geetha', currency: 'INR', mode: 'CR', transactionamt: 10000, accountdetails: {
            name: 'Subramanian', accountno: '82261011655777'
        }
    },
    {
        id: 2, date: new Date(), desc: 'NEFT-Subramanian', currency: 'INR', mode: 'CR', transactionamt: 10000, accountdetails: {
            name: 'Subramanian', accountno: '82261011655777'
        }
    },
    {
        id: 3, date: new Date(), desc: 'NEFT-Ram', currency: 'INR', mode: 'CR', transactionamt: 10000, accountdetails: {
            name: 'Subramanian', accountno: '82261011655777'
        }
    }
];


@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    findAll(): Observable<any[]> {
        return of(transactions);
    }
    getTransactionByid(id: any): Observable<any[]> {
              return of(transactions.filter(trans => trans.id == id));
    }
}