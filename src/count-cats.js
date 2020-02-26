module.exports = function countCats(matrix) {
  let count = 0;
  for (line of matrix) {
    for (cell of line) {
      if (cell == "^^") count += 1;
    }
  }
  return count;
};
