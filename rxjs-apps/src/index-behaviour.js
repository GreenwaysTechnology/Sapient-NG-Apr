import {

    BehaviorSubject
} from 'rxjs';


let isLoading = true
const beSubject = new BehaviorSubject(isLoading); // 0 is the initial value

beSubject.subscribe(v => console.log(`Loading Status : ${v}`))
beSubject.subscribe(v => console.log(`Loading Status: ${v}`))

setTimeout(() => {
    beSubject.next(!isLoading)
}, 1000);