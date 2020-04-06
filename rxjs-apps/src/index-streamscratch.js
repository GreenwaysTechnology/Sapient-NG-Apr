import { Observable } from 'rxjs';

//create stream from scratch.
const stream = new Observable((subscriber) => {
    /** 
     * 'Hello Reactive is data source'
        push data into stream using next method
        as soon as u push data , stream emits an event -data
             * */
    //async submission
    setTimeout(() => {
        subscriber.next('delayed response!!!')
        subscriber.complete();
    }, 5000)
    subscriber.next('Hello reactive')
    subscriber.next('Hello how are you!')
    subscriber.next('Welcome to Reactive Programming!!!')
    //subscriber.error(new Error('Something went wrong!!'))
    subscriber.next('Hey...')
    subscriber.next('hhhhh...')

});

//
// stream.subscribe(data => console.log(data), err => console.log(err), () => {
//     console.log('Complete')
// })

const { log } = console;
stream.subscribe(log, log, () => log('done'))