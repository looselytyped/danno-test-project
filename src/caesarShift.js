
const ALPHA_WIDTH = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
const UPPER_A_CHAR_CODE = 'A'.charCodeAt(0);
const LOWER_A_CHAR_CODE = 'a'.charCodeAt(0);

function isValidChar(c) {
   return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
}

function isUpperCase(c) {
   return c.charCodeAt(0) == c.toUpperCase().charCodeAt(0);
}

function shiftSingleChar(str, shift) {
   const currentChar = str.charAt(0);
   if (!isValidChar(currentChar)) return str;
   const aCharCode = isUpperCase(currentChar) ? UPPER_A_CHAR_CODE : LOWER_A_CHAR_CODE;
   const shifted = (str.charCodeAt(0) - aCharCode + shift + ALPHA_WIDTH) % ALPHA_WIDTH + aCharCode;
   return String.fromCharCode(shifted);
}

function process(str, shift) {
   if (str == null) {
      throw new Error('The string provided is null')
   }
   if (shift == 0) return str;
   return str.split('').map(c => shiftSingleChar(c, shift)).join('');
}

function encrypt(str, shift) {
   return process(str, shift);
}

function decrypt(str, shift) {
   return process(str, -shift);
}

export { encrypt, decrypt };
