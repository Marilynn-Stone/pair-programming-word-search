const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['L', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['G', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'l', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['T', 'i', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['N', 'g', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'h', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['N', 't', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['G', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LIGHTNING');

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontally in reverse", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'A'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'I', 'O', 'F', 'O', 'R', 'E', 'A'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'AEROFOIL');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically in reverse", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'A'],
      ['S', 'E', 'L', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'O', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'F', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'O', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'I', 'R', 'F', 'O', 'R', 'E', 'A'],
      ['O', 'D', 'E', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'A', 'F', 'Q', 'U', 'A', 'L'],
    ], 'AEROFOIL');

    assert.isTrue(result);
  });

});
