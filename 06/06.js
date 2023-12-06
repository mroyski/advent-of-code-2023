const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

const part1 = () => {
  const times = input[0]
    .split(':')[1]
    .split(' ')
    .filter((t) => t);
  const distances = input[1]
    .split(':')[1]
    .split(' ')
    .filter((d) => d);

  console.log(times);
  console.log(distances);

  let sum = 1;

  for (let i = 0; i < times.length; i++) {
    const time = parseInt(times[i]);
    const distance = parseInt(distances[i]);

    let wins = 0;

    for (let hold = 1; hold <= time; hold++) {
      let travelled = (time - hold) * hold;
      if (travelled > distance) {
        wins += 1;
      }
    }

    sum *= wins;
  }

  console.log(sum);
};

const part2 = () => {
  const time = parseInt(
    input[0]
      .split(':')[1]
      .split(' ')
      .filter((t) => t)
      .join('')
  );
  const distance = parseInt(
    input[1]
      .split(':')[1]
      .split(' ')
      .filter((d) => d)
      .join('')
  );

  console.log(time);
  console.log(distance);

  let wins = 0;

  for (let hold = 1; hold < time; hold++) {
    let travelled = (time - hold) * hold;
    if (travelled > distance) {
      wins += 1;
    }
  }
  console.log('wins: ', wins);
};

part1(); // 2612736
part2(); // 29891250
