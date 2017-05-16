import chai, {
  expect,
} from 'chai';

import add, { foo } from '../src/calculator.js';

describe('add', () => {
  describe('addition', () => {
    it('should add two numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });
  describe('negative numbers', () => {
    it('should add consider negative numbers', () => {
      expect(add(2, -3)).to.equal(-1);
    });
  });
  describe('the hell is going on here', () => {
    it('should smell great', () => {
      expect(add(5, 10)).to.equal(15);
    });
  });
  describe('obj.blah', () => {
    it('should be mocked as...', () => {
      const baz = { blah: () => 'butt' };
      expect(foo(baz)).to.equal('butt');
    });
  });
  describe('a promise', () => {
    it('should work as such using regular js features', () => {
      const p = new Promise((res, rej) => {
        setTimeout(res, 1000, 'woohoo!');
      });
      return p.then((msg) => { expect(msg).to.equal('woohoo!'); },
                      err => console.err(`You suck! ${err}`));
    });

    it('should work as such using chai as promised', function (done) {
      this.timeout(3000);
      const p = new Promise((res) => {
        setTimeout(res, 1000, 'woohoo!');
      });
      return expect(p).not.to.eventually.equal('woohoo!!').notify(done);
    });
  });
   // Look up the chai api
   // Look up the sinon api
});
