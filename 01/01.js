const fs = require('fs');

// Part 1
let input = fs.readFileSync('input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

const keys = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

let total = 0;

input.forEach((line) => {
  const digitsOnly = /\d/g;
  const digits = line.match(digitsOnly);

  let result;
  if (digits.length > 1) {
    result = parseInt([digits[0], digits[digits.length - 1]].join(''));
  } else {
    result = parseInt(`${digits[0]}${digits[0]}`);
  }
  total += result;
});

console.log(total);

// 55130
