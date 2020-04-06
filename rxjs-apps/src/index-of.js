

//single value /sequenece of values one at time.

import { of } from "rxjs";


const stream = of('Hi', 'Hello', 'How are you', 'Welcome');

//listening
const { log } = console;
stream.subscribe(log, log, () => log('completed'))