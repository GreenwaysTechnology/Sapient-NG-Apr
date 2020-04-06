//cold observable(cold stream)

import { Observable } from "rxjs";

const coldStream = new Observable(subscriber => {
    for (let i = 0; i < 10; i++) {
        subscriber.next(i);
    }
    subscriber.complete();
});


//subscribers : Karthik
setTimeout(() => {
    coldStream.subscribe(data => {
        console.log(`Karthik's ${data} who is running`)
    }, console.log, () => console.log('Karthik done'));
}, 5000)


//subscribers : Subramanian
coldStream.subscribe(data => {
    console.log(`Subramanian's ${data} who is running`)
}, console.log, () => console.log('Subramanian done'));

//subscribers : Ram
coldStream.subscribe(data => {
    console.log(`Ram's ${data} who is running`)
}, console.log, () => console.log('Ram done!!'));
