//const bookParser = require('./book-parser');
//const readline = require('readline');
//const fs = require('fs');

import {parseLine, Checkout} from './book-parser.js';
import {createInterface} from 'readline';
import {createReadStream} from 'fs';

var appRoot = process.cwd();

export const r1 = createInterface({
  input: createReadStream(appRoot + '/resources/library.txt')
});
