const transpose = function(matrix) {
  const newArry = [];
  for (let row = 0; row < matrix[0].length; row++) {
    const colArry = [];
    for (let col = 0; col < matrix.length; col++) {
      colArry.push(matrix[col][row]);
    }
    newArry.push(colArry);
  }
  return newArry;
};

const horizontalWordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

const reverseSearch = (letters, word) => {
  const reversed = letters.map((as) => as.reverse().join(""));
  for (let a of reversed) {
    if (a.includes(word)) {
      return true;
    }
  }
  return false;
};

const wordSearch = (letters, word) => {
  if (horizontalWordSearch(letters, word)) {
    return true;
  }
  const tranposedLetters = transpose(letters);
  if (horizontalWordSearch(tranposedLetters, word)) {
    return true;
  }
  if (reverseSearch(letters, word)) {
    return true;
  }
  if (reverseSearch(tranposedLetters, word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;