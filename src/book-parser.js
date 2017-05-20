import moment from 'moment'

class Checkout {
   constructor(name, title, date) {
      this.name = name;
      this.title = title;
      this.date = date;
   }

   penalty(today, amount) {
      if (today.isSame(this.date)) return 0;
      return Math.floor(today.diff
         (this.date.add(1, 'days'), 'months', true)) * amount;
   }
}

const parseLine = (str) => {
   const tokens = str.split('~');
   if (tokens.length !== 3) throw new Error('Invalid number of tokens');
   return new Checkout(tokens[0], tokens[1], moment(tokens[2]));
}

export {parseLine, Checkout};
