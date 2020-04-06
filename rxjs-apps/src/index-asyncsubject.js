

import {
    AsyncSubject
} from 'rxjs';

const asyncSubject = new AsyncSubject();

asyncSubject.subscribe(v => console.log(`Asyn Subject-1 : ${v}`))
asyncSubject.subscribe(v => console.log(`Asyn Subject-2 : ${v}`))
asyncSubject.subscribe(v => console.log(`Asyn Subject-3 : ${v}`))

// asyncSubject.next('Hello')
// asyncSubject.next('hai')
// asyncSubject.next('welcome')

for (let i = 0; i < 5; i++) {
    asyncSubject.next(i)
}
//complete signale must be there
asyncSubject.complete();

