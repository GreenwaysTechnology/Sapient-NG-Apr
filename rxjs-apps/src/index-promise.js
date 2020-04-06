
import { from } from "rxjs";

//Promises ; async
const getPromise = () => {
    return Promise.resolve('Async : via Promise')
}

const stream = from(getPromise());

const { log } = console;
stream.subscribe(log, log, () => log('done'))
