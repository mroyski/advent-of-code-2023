const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

console.log(input);

let sum = 0;

input.forEach((line) => {
  const winningNumbers = line
    .split('|')[0]
    .split(':')[1]
    .split(' ')
    .filter((s) => s);
  const cardNumbers = line
    .split('|')[1]
    .split(' ')
    .filter((s) => s);

  const winners = {};
  winningNumbers.forEach((number) => {
    winners[number] = true;
  });

  let points = 0;
  cardNumbers.forEach((number) => {
    if (winners[number]) {
      console.log('number', number);

      if (points === 0) {
        points = 1;
      } else {
        points *= 2;
      }
    }
  });

  sum += points;
});

console.log(sum); // 26346
