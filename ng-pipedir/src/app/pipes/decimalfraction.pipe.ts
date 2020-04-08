import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'decimalFraction' })
export class DecimalFractionPipe implements PipeTransform {

    /**
     *  {{ value | nameofthPipe }}
     * First arg is value
     * second arg is collection of args : var args
     *  
     * */
    // transform(value: any, ...args: any[]) {
    //     console.log(`Value ${value}`)
    //     console.log(`args ${args}`)
    //     //logic
    // }
    transform(value: number, input: number = 2) {
        let formateInput: number = input;
        //logic
        return value.toFixed(formateInput);
    }
}