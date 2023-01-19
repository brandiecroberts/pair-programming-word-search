const transpose = function(matrix) {
  
  let transposedArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transposedArray[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposedArray[i][j] = matrix[j][i];
    }
  }
  // const printMatrix = (matrix) => {
  //   for (const row of matrix) {
  //     for (const el of row) {
  //       process.stdout.write(el + " ");
  //     }
  //     process.stdout.write("\n");
  //   }
  // };
  return (transposedArray);
};

// let thisArray = transpose([
//   ["A", "W", "C", "F", "Q", "U", "A", "L"],
//   ["S", "E", "I", "N", "F", "E", "L", "D"],
//   ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//   ["H", "M", "J", "T", "E", "V", "R", "G"],
//   ["W", "H", "C", "S", "Y", "E", "R", "L"],
//   ["B", "F", "R", "E", "N", "E", "Y", "B"],
//   ["U", "B", "T", "W", "A", "P", "A", "I"],
//   ["O", "D", "C", "A", "K", "U", "A", "S"],
//   ["E", "Z", "K", "F", "Q", "U", "A", "L"],
// ]);

// console.log(thisArray);

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  //   console.log({horizontalJoin});
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = {wordSearch, transpose};