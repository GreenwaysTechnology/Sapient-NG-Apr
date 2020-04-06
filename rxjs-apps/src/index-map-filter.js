

//tap : is used for logging purpose

import { of } from "rxjs";
import { tap, map, filter } from "rxjs/operators";


//chaining pattern
const { log } = console;

//data processing
of(1, 2, 3, 4, 5, 6, 7) //up stream
    .pipe(
        tap(item => log(`Emits for each value ${item}`)),
        map(value => value * 3),  // new stream : down stream | upstream
        filter(newItem => newItem % 2 === 0) // new stream based truthy values
    )
    .subscribe(log, log, () => log('done'))

