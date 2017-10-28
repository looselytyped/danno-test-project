//const bookParser = require('./book-parser');
//const readline = require('readline');
//const fs = require('fs');

import {parseLine, Checkout} from './book-parser.js';
import {get} from 'https';
import moment from 'moment';
import Rx from 'rxjs/Rx';

get('https://raw.githubusercontent.com/dhinojosa/node-tdd/master/resources/library.txt', (res) => {
   res.on('data', (chunk) => { console.log(`On Data: ${chunk}`);});
   res.on('end', () => { console.log('end');});
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
