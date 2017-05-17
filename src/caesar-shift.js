
const ALPHA_WIDTH = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
const UPPER_A_CHAR_CODE = 'A'.charCodeAt(0);
const LOWER_A_CHAR_CODE = 'a'.charCodeAt(0);

const isValidChar = (char) => {
   return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
}

const isUpperCase = (char) => {
   return char.charCodeAt(0) == char.toUpperCase().charCodeAt(0);
}

const shiftSingleChar = (str, shift) => {
   const currentChar = str.charAt(0);
   if (!isValidChar(currentChar)) return str;
   const aCharCode = isUpperCase(currentChar) ? UPPER_A_CHAR_CODE : LOWER_A_CHAR_CODE;
   const shifted = (str.charCodeAt(0) - aCharCode + shift + ALPHA_WIDTH) % ALPHA_WIDTH + aCharCode;
   return String.fromCharCode(shifted);
}

const process = (str, shift) => {
   if (str == null) throw new Error('The string provided is null');
   if (shift == 0) return str;
   return str.split('').map(c => shiftSingleChar(c, shift)).join('');
}

const encrypt = (str, shift) => process(str, shift);

const decrypt = (str, shift) => process(str, -shift);

export { encrypt, decrypt };
