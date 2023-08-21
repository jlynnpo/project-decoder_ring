// Write your tests here!
const chai = require('chai');
const expect = chai.expect;
const { polybius } = require('../src/polybius.js');

describe('polybius', () => {
  it('should correctly encode i/j as 42', () => {
    let result = polybius("ij", true);
    expect(result).to.equal("4242");
  });
  it('should decode "42" as "ij"', () => {
    let result = polybius("42", false);
    expect(result).to.equal("ij");
  });
  
  it('should ignore capital letters', () => {
    const result = polybius('A Message', true);
    expect(result).to.equal('11 23513434112251');
  });
  it('should maintain spaces in the message', () => {
    const result = polybius('A Message', true);
    expect(result).to.equal('11 23513434112251');
  });
});