import { interval } from "rxjs";


//infinite stream : has no complete signal
const stream = interval(1000);

const { log } = console;
stream.subscribe(log, log, () => log('done'))