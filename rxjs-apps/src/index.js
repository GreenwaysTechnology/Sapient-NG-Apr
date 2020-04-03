import { Observable } from 'rxjs';


const dataSource = 'Hello Reactive!!!!';

//create Basic stream
const stream = new Observable(subscriber => {
    //push data into stream
    subscriber.next(dataSource); //emit data event,then data channel is used to send data
    subscriber.next('Hello Rxjs!')
    // subscriber.error('heay')
    subscriber.complete(); //emit complete event , which will trigger completed
});

//Consumer : open three channel(data,error,complete)

stream.subscribe(data => console.log(data), err => console.log(err), () => console.log('done!'));