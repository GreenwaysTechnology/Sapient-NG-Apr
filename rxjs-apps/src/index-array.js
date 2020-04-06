import { from } from "rxjs";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const stream = from(list);

const { log } = console;
stream.subscribe(log, log, () => log('done'))
