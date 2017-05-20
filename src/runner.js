//const bookParser = require('./book-parser');
//const readline = require('readline');
//const fs = require('fs');

import {parseLine, Checkout} from './book-parser.js';
import {createInterface} from 'readline';
import {createReadStream} from 'fs';
import moment from 'moment';
import Rx from 'rxjs/Rx';

const r1 = createInterface({
    input: createReadStream(
       '/Users/danno/Development/danno-test-project/resources/library.txt')
});

//r1.on('line', (line) => {
//   console.log(`Line from file: ${line}`);
//});

Rx.Observable.fromEvent(r1, 'line')
   .map(ln => parseLine(ln))
   .map(co => {name: co..penalty(moment(), 10))
   .subscribe(x => console.log(x));
