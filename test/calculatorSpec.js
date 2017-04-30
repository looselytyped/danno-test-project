import {
  expect,
} from 'chai';

import calculator from '../src/calculator.js';

describe('calculator', () => {
  describe('addition', () => {
    it('should add two numbers', () => {
      expect(calculator(2, 3)).to.equal(5);
    });
  });

  describe('negative numbers', () => {
    it('should add consider negative numbers', () => {
      expect(calculator(2, -3)).to.equal(-1);
    });
  });
});
