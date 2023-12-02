const fs = require('fs');

let input = fs.readFileSync(__dirname + 'input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');



// Part 1
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

console.log('Part1: ', total);

// 55130



// Part 2
total = 0;
const keys = {
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

input.forEach((line) => {
  let firstDigit = null;
  let secondDigit = null;

  // get first digit
  for (let i = 0; i < line.length; i++) {
    let subString = line.substring(i, line.length);
    console.log(subString);

    if (subString[0].match(/[0-9]/)) {
      firstDigit = subString[0];
    } else {
      for (k in keys) {
        if (subString.startsWith(k)) {
          firstDigit = keys[k];
        }
      }
    }

    if (firstDigit !== null) break;
  }

  // get second digit
  for (let i = line.length - 1; i >= 0; i--) {
    let subString = line.substring(i, line.length);

    if (subString[0].match(/[0-9]/)) {
      secondDigit = subString[0];
      break;
    }

    for (k in keys) {
      if (subString.startsWith(k)) {
        secondDigit = keys[k];
        break;
      }
    }

    if (secondDigit !== null) break;
  }

  result = parseInt(`${firstDigit}${secondDigit}`);
  console.log(result);
  total += result;
});

// 54985
