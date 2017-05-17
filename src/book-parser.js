import moment from 'moment'

function Checkout(name, title, date) {
   this.name = name;
   this.title = title;
   this.date = date;
}

Checkout.prototype.penalty = function(today, amount) {
   return today.subtract(1, "days")
               .diff(this.date, 'months', true) * amount;
}

function parseLine(str) {
   const tokens = str.split('~');
   if (tokens.length != 3) throw new Error('Invalid number of tokens');
   return new Checkout(tokens[0], tokens[1], moment(tokens[2]));
}

export {parseLine, Checkout};


