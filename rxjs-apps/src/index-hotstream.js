//hot Stream 

import { interval } from "rxjs";
import { publish } from "rxjs/operators";


/**
 * cold to hot : conntectableObservable:
 */

//interval to simulate hot stream

const hotstream = interval(1000).pipe(publish());

//subscribers : Subramanian

setTimeout(() => {
    let subscription = hotstream.subscribe(data => {
        console.log(`Subramanian's ${data} who is running`)
    }, console.log, () => console.log('Subramanian done'));

    setTimeout(() => {
        console.log('Subramanian is leaving the Session!!!')
        subscription.unsubscribe();
    }, 12000)
}, 100)


setTimeout(() => {
    //subscribers : Ram
    let subscription = hotstream.subscribe(data => {
        console.log(`Ram's ${data} who is running`)
    }, console.log, () => console.log('Ram done!!'));

    //leave the after some time
    setTimeout(() => {
        console.log('Ram is leaving the Session!!!')
        subscription.unsubscribe();
    }, 10000)

}, 5000)

setTimeout(() => {
    //subscribers : Ram
    let subscription = hotstream.subscribe(data => {
        console.log(`John's ${data} who is running`)
    }, console.log, () => console.log('John done!!'));

}, 20000)

hotstream.connect();
