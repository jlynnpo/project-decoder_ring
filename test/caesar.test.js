// Write your tests here!
const chai = require('chai');
const expect = chai.expect;
const { caesar } = require('../src/caesar.js');


describe('caesar', function() {
  it('should return false if shift value is equal to 0, less than -25, greater than 25, or not present', function() {
    expect(caesar('a', 0)).to.equal(false);
    expect(caesar('a', -26)).to.equal(false);
    expect(caesar('a', 26)).to.equal(false);
    expect(caesar('a')).to.equal(false);
  });
  it('should ignore capital letters', function() {
    expect(caesar('A Message', 1)).to.equal(caesar('a message', 1));
  });
  it('should handle shifts that go past the end of the alphabet', function() {
    expect(caesar('z', 3)).to.equal('c');
  });
  it('should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding', function() {
    expect(caesar('A Message', 1)).to.equal('b nfttbhf');
    expect(caesar('b nfttbhf', -1)).to.equal('a message');
  });
});
  