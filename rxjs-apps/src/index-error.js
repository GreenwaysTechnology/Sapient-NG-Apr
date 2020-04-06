//catch Error
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


//create Error Stream:Just emits 'error', and nothing else.
const errorStream = throwError(new Error('Something went Wrong!!'));

//gracefully handle error, returning observable with error message
const example = errorStream.pipe(catchError(val => of(`I caught: ${val}`)));
//output: 'I caught: This is an error'
const subscribe = example.subscribe(val => console.log(val));

