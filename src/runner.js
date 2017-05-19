//const bookParser = require('./book-parser');
//const readline = require('readline');
//const fs = require('fs');

import {parseLine, Checkout} from './book-parser.js';
import {createInterface} from 'readline';
import {createReadStream} from 'fs';

const r1 = createInterface({
    input: createReadStream('home/danno/Development/danno-test-project/resources/library.txt')
});

r1.on('line', (line) => {
   console.log(`Line from file: ${line}`);
});
