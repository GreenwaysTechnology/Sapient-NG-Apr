//Services

import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class HelloService {
    constructor() { }
    //Api:Sync
    // public sayHello() {
    //     return 'Hello Angular Developer'
    // }
    // public sayHello(cb) {
    //     setTimeout(cb, 5000, 'Hello Angular Developer!');
    // }
    public sayHello(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(resolve, 5000, 'Hello Angular Developer!');
        });
    }

}