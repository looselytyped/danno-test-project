import {assert, expect} from 'chai';
import moment from 'moment';
import {parseLine, Checkout} from '../src/book-parser.js';

describe('A parse of a simple file', () => {
   it('should parse a line with "~" separators', () => {
      const result = parseLine('Beth Brown~The Leftovers~2013-03-31')
      expect(result.name).to.be.eql('Beth Brown');
      expect(result.title).to.be.eql('The Leftovers');
      expect(result.date.isSame(moment('2013-03-31'))).to.be.true;
   });
   it('should parse another line with different content', () => {
      const result = parseLine('Daniel Hinojosa~Functional Programming~2015-05-11')
      //expect(result).to.be.a('Checkout');
      expect(result.name).to.be.eql('Daniel Hinojosa');
      expect(result.title).to.be.eql('Functional Programming');
      assert(result.date.isSame(moment('2015-05-11')));
   });
   it('should parse line with 2 number of items', () => {
      try {
         parseLine('Daniel Hinojosa~Functional Programming');
         assert(false);
      } catch (e) {
         expect(e).to.be.an('error');
         expect(e.message).to.be.eql('Invalid number of tokens');
      }
   });
   it('should parse line with 4 number of items', () => {
      try {
         parseLine('Daniel Hinojosa~Functional~Programming~2015-05-11');
         assert(false);
      } catch (e) {
         expect(e).to.be.an('error');
         expect(e.message).to.be.eql('Invalid number of tokens');
      }
   });
});
describe('A checkout and the penalty', () => {
   it('todays date and checkout date are the same', () => {
      const checkout = new Checkout(null, null, moment("2017-02-01"));
      expect(checkout.penalty(moment('2017-02-01'), 10)).to.be.eql(0);
   });
   it('todays date and checkout date are exactly one month apart', () => {
      const checkout = new Checkout(null, null, moment("2017-02-01"));
      expect(checkout.penalty(moment('2017-03-01'), 10)).to.be.eql(0);
   });
   it('january 29th, 2017 is checkout date and now it is March 1, 2017', () => {
      const checkout = new Checkout(null, null, moment("2017-01-29"));
      expect(checkout.penalty(moment('2017-03-01'), 10)).to.be.eql(10);
   });
   it('january 29th, 2017 is checkout date and now it is March 1, 2017', () => {
      const checkout = new Checkout(null, null, moment("2017-01-29"));
      expect(checkout.penalty(moment('2017-03-01'), 10)).to.be.eql(10);
   });
});
