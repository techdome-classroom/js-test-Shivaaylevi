const getTotalIsles = function (grid) {

  let counter = 0;
  for (let i in grid) {
    for (let j in grid[i]) {
      if (grid[i][j] === "L") {
        counter++;
        check(parseInt(i), parseInt(j), grid)
      }
    }
  }
  return counter;
};

const check = (row, col, grid) => {
  if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === "W") {
    return;
  }
  grid[row][col] = "W";
  check(row + 1, col, grid)
  check(row - 1, col, grid)
  check(row, col + 1, grid)
  check(row, col - 1, grid)
};

module.exports = getTotalIsles;
