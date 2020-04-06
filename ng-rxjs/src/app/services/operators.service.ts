import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OperatorService {
    constructor() {
        console.log('Operator Service is activated')
    }
    broadCast(): any {
        const source = interval(1000);
        const example: any = source.pipe(
            //side effects will be executed once
            tap(_ => console.log('Do Something!')),
            //do nothing until connect() is called
            publish()
        );
        //call connect after 5 seconds, causing source to begin emitting items
        setTimeout(() => {
            example.connect();
        }, 5000);
        return example;
    }
}