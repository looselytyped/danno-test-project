import { expect, assert } from 'chai';
import { encrypt, decrypt } from '../src/caesarShift';

describe('A caesar shift', () => {
   describe('A shift of an empty string', () => {
      it('should still be an empty string and zero', () => {
         expect(encrypt('', 0)).to.be.eql('');
      });
      it('should still be an empty string with a number', () => {
         expect(encrypt('', 4)).to.be.eql('');
      });
   });
   describe('An encrypt shift of an string for one lowercase character', () => {
      it('should not shift with one character with shift of zero', () => {
         expect(encrypt('a', 0)).to.be.eql('a');
      });
      it('should shift with one character with shift of one', () => {
         expect(encrypt('a', 1)).to.be.eql('b');
      });
      it('should shift with three characters', () => {
         expect(encrypt('c', 3)).to.be.eql('f');
      });
      it('should also curl around when for example we have a z and shift by 3', () => {
         expect(encrypt('z', 3)).to.be.eql('c');
      });
   });
   describe('An encrypt shift of an string for one uppercase character', () => {
      it('should not shift with one character with shift of zero', () => {
         expect(encrypt('A', 0)).to.be.eql('A');
      });
      it('should shift with one character with shift of one', () => {
         expect(encrypt('A', 1)).to.be.eql('B');
      });
      it('should shift with one character with shift of four', () => {
         expect(encrypt('M', 4)).to.be.eql('Q');
      });
      it('should also curl around when for example we have a z and shift by 3', () => {
         expect(encrypt('Z', 3)).to.be.eql('C');
      });
   });
   describe('An encrypt shift of a string with one non-alpha character', () => {
      it('should not shift with a character that is not an alpha character using "$"', () => {
         expect(encrypt('$', 0)).to.be.eql('$');
      });
      it('should not shift with a character that is not an alpha character using "&"', () => {
         expect(encrypt('&', 5)).to.be.eql('&');
      });
   });
   describe("A encrypt shift of a word", () => {
      it('should not shift an entire word if the shift is zero', () => {
         expect(encrypt('Hello', 0)).to.be.eql('Hello');
      });
      it('should not shift an entire word if the shift is one', () => {
         expect(encrypt('Hello', 1)).to.be.eql('Ifmmp');
      });
      it('should not shift an entire word if the shift is one and with a dash', () => {
         expect(encrypt('Hello-World', 1)).to.be.eql('Ifmmp-Xpsme');
      });
   });
   describe('A decrypt shift of an string for one lowercase character', () => {
      it('should not shift with one character with shift of zero', () => {
         expect(decrypt('a', 0)).to.be.eql('a');
      });
      it('should shift with one character with shift of four at the end of alphabet', () => {
         expect(decrypt('y', 4)).to.be.eql('u');
      });
      it('should decrypt shift with an early character, like a with shift of 5', () => {
         expect(decrypt('a', 5)).to.be.eql('v');
      });
   });
   describe('A decrypt shift of a string with one non-alpha character', () => {
      it('should not shift with a character that is not an alpha character using "$"', () => {
         expect(decrypt('$', 0)).to.be.eql('$');
      });
      it('should not shift with a character that is not an alpha character using "&"', () => {
         expect(decrypt('&', 5)).to.be.eql('&');
      });
   });
   describe("A decrypt shift of a word", () => {
      it('should not shift an entire word if the shift is zero', () => {
         expect(decrypt('Ifmmp', 0)).to.be.eql('Ifmmp');
      });
      it('should not shift an entire word if the shift is one', () => {
         expect(decrypt('Ifmmp', 1)).to.be.eql('Hello');
      });
      it('should not shift an entire word if the shift is one and with a dash', () => {
         expect(decrypt('Ifmmp-Xpsme', 1)).to.be.eql('Hello-World');
      });
      it('should decrypt a difficult word', () => {
         expect(decrypt('Apple', 2)).to.be.eql('Ynnjc');
      });
   });
   describe("Some bad input for encrypt", () => {
      it('should not accept a null', () => {
         try {
            encrypt(null);
            assert(false); //fail
         } catch (e) {
            expect(e).to.be.an('error')
            expect(e.message).to.be.eq('The string provided is null');
         }
      });
      it('should not accept an undefined', () => {
         try {
            encrypt(undefined);
            assert(false); //fail
         } catch (e) {
            expect(e).to.be.an('error')
            expect(e.message).to.be.eq('The string provided is null');
         }
      });
   });
   describe("Some bad input for decrypt", () => {
      it('should not accept a null', () => {
         try {
            decrypt(null);
            assert(false); //fail
         } catch (e) {
            expect(e).to.be.an('error')
            expect(e.message).to.be.eq('The string provided is null');
         }
      });
      it('should not accept an undefined', () => {
         try {
            decrypt(undefined);
            assert(false); //fail
         } catch (e) {
            expect(e).to.be.an('error')
            expect(e.message).to.be.eq('The string provided is null');
         }
      });
   });
});
