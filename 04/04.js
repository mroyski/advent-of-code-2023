const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

const part1 = () => {
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
        if (points === 0) {
          points = 1;
        } else {
          points *= 2;
        }
      }
    });

    sum += points;
  });

  console.log(sum);
};

const part2 = () => {
  let cards = {};

  for (let i = 0; i < input.length; i++) {
    const currentNumber = i + 1;

    const winningNumbers = input[i]
      .split('|')[0]
      .split(':')[1]
      .split(' ')
      .filter((s) => s);
    const cardNumbers = input[i]
      .split('|')[1]
      .split(' ')
      .filter((s) => s);

    let matchCount = 0;
    cardNumbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchCount += 1;
      }
    });

    cards[currentNumber] = {
      number: currentNumber,
      matches: matchCount,
      count: 1,
    };
  }

  for (let i = 1; i <= input.length; i++) {
    let matches = cards[i]['matches'];

    for (let j = matches; j > 0; j--) {
      if (cards[i + j]) {
        cards[i + j]['count'] += cards[i]['count'];
      }
    }
  }

  let sum = 0;
  for (c in cards) {
    sum += cards[c]['count'];
  }
  console.log(sum);
};

part1(); // 26346
part2(); // 8467762
