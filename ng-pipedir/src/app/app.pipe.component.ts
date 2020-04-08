import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ToDoService } from './todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './pipe.component.html'
})
export class PipeComonent {

    todos: any;
    constructor(private todoService: ToDoService) { }
    today = new Date()
    //currency values
    stockPrice = 100000.7834;
    //object
    formValues = {
        name: 'subramanian',
        email: 'foo@mydomain.com',
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    }
    //percentage
    avgPrice = 0.34568;
    avgPriceFr = 1.34568;

    firstName = "subramanian"

    stream = of('Hello I am Observable')

    datasource: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    list = of(this.datasource);

    //custom pipe
    goldPrice = 22345.78456;


    ngOnInit() {
        this.todos = this.todoService.findAll()
    }




}
