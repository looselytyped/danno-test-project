import {
  r1,
} from './runner';

r1.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});
