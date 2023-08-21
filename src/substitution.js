// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //check if the alphabet is valid and return false if not
    if (alphabet === undefined || alphabet.length !== 26) 
      return false;
    
    
    const alphabetSet = new Set(alphabet);
    if (alphabetSet.size !== 26)
      return false;
    //split the standard and substitution alphabets into arrays
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const substitutionAlphabet = alphabet.split('');
    
    let result = '';
    
    
    if (encode) {
      //iterate through the string and replace each character with its corresponding character in the substitution alphabet
      for (let i=0; i < input.length; i++) {
        const char = input[i];
        const index = standardAlphabet.indexOf(char);
        if (index >=0) {
          result += substitutionAlphabet[index];
        } else {
          result += char;
        }
      }
    } else {
      //iterate through the string and replace each character with its corresponding character in the standard alphabet
      for (let i=0; i < input.length; i++) {
        const char = input[i];
        const index = substitutionAlphabet.indexOf(char);
        if (index >=0) {
          result += standardAlphabet[index];
        } else {
          result += char;
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
