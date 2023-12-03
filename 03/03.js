const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

const isNumber = (char) => {
  return char.match(/\d/);
};

const isSymbol = (char) => {
  return char.match(/[^.\d]/);
};

const symbolAdjacent = (y, x) => {
    console.log(y, x)
  // left
  if (x > 0) {
    if (isSymbol(input[y][x - 1])) return true;
  }

  // right
  if (x < input[y].length - 1) {
    if (isSymbol(input[y][x + 1])) return true;
  }

  // top
  if (y > 0) {
    // left
    if (x > 0) {
      if (isSymbol(input[y - 1][x - 1])) return true;
    }
    // center
    if (isSymbol(input[y - 1][x])) return true;
    // right
    if (x < input[y].length - 1) {
      if (isSymbol(input[y - 1][x + 1])) return true;
    }
  }

  // bottom
  if (y < input.length - 1) {
    // left
    if (x > 0) {
      if (isSymbol(input[y + 1][x - 1])) return true;
    }
    // center
    if (isSymbol(input[y + 1][x])) return true;
    // right
    if (x < input[y].length - 1) {
      if (isSymbol(input[y + 1][x + 1])) return true;
    }
  }
  return false;
};

let sum = 0;
let number = '';
let adjacent = false;


for (let y = 0; y < input.length; y++) {
  for (let x = 0; x < input[y].length; x++) {
    if (isNumber(input[y][x])) {
      number = number.concat(input[y][x]);
      if (symbolAdjacent(y, x)) {
        adjacent = true;
      }
    } else {
      if (number !== '' && adjacent) {
        console.log(number)
        sum += parseInt(number);
      }
      number = '';
      adjacent = false;
    }
  }
}

console.log(sum)