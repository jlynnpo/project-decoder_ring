// Write your tests here!
const chai = require('chai');
const expect = chai.expect;
const {substitution} = require('../src/substitution.js');

describe('substitution()', () => {
  it('should return false if alphabet is not 26 characters long', () => {
    expect(substitution('abc', 'abcdefg')).to.equal(false);
     });
  it('correctly translates the given phrase, based on the alphabet given to the function', () => {
    expect(substitution('hello', 'abcdefghijklmnopqrstuvwxyz')).to.equal('hello');
  });
  it('returns false if there are any duplicate characters in the given alphabet', () => {
    expect(substitution('', 'abcdefghijklmnopqrstuvwxya')).to.equal(false);
  });
  it('maintains spaces in the message, before and after encoding or decoding', () => {
    expect(substitution('a message', 'abcdefghijklmnopqrstuvwxyz')).to.equal('a message');
  });
  it('should ignore capital letters', function() {
    expect(substitution('A Message', 1)).to.equal(substitution('a message', 1));
  });
});