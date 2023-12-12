const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

const emptyRows = [];
const emptyColumns = [];

for (let i = 0; i < input.length; i++) {
  let rowLength = input[i].length;
  let replaced = input[i].replace('#', '');
  if (replaced.length === rowLength) emptyRows.push(i);
}

for (let i = 0; i < input[0].length; i++) {
  let hasGalaxy = false;
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === '#') {
      hasGalaxy = true;
      break;
    }
  }
  if (!hasGalaxy) emptyColumns.push(i);
}

const galaxies = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === '#') galaxies.push([i, j]);
  }
}

const solution = (modifier) => {
  let sum = 0;

  for (let i = 0; i < galaxies.length - 1; i++) {
    let left = galaxies[i];

    for (let j = i + 1; j < galaxies.length; j++) {
      let right = galaxies[j];

      let rowDiff = Math.abs(left[0] - right[0]);
      let colDiff = Math.abs(left[1] - right[1]);

      let colModifiers = emptyColumns.filter((c) => {
        if (left[1] < right[1]) return c > left[1] && c < right[1];
        else return c < left[1] && c > right[1];
      });

      let rowModifiers = emptyRows.filter((r) => {
        if (left[0] < right[0]) return r > left[0] && r < right[0];
        else return r < left[0] && r > right[0];
      });

      rowDiff += rowModifiers.length * modifier;
      colDiff += colModifiers.length * modifier;

      if (modifier > 1) {
        rowDiff -= rowModifiers.length;
        colDiff -= colModifiers.length;
      }

      let distance = colDiff + rowDiff;

      sum += distance;
    }
  }

  console.log('sum:', sum); // 10292708
};

// Part 1
solution(1); // 10292708

// Part 2
solution(1000000); // 790194712336
