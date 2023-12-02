const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

// Part 1
// 12 red cubes,
// 13 green cubes,
// 14 blue cubes
let sum1 = 0;
const cubeMax = {
    red: 12,
    green: 13,
    blue: 14,
  };

input.forEach((line) => {
  let validGame = true;
  const game = parseInt(line.split(' ')[1].split(':')[0]);

  const games = line.split(':')[1].split(';');

  games.forEach((g) => {
    const pull = g.split(',');

    pull.forEach((p) => {
      count = parseInt(p.split(' ')[1]);
      color = p.split(' ')[2];

      if (count > cubeMax[color]) {
        validGame = false;
      }
    });
  });

  if (validGame) sum1 += game;
});

console.log(sum1); // 2006


// Part 2
let sum2 = 0;
input.forEach((line) => {
  const game = parseInt(line.split(' ')[1].split(':')[0]);

  const cubes = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const games = line.split(':')[1].split(';');

  games.forEach((g) => {
    const pull = g.split(',');

    pull.forEach((p) => {
      count = parseInt(p.split(' ')[1]);
      color = p.split(' ')[2];

      if (count > cubes[color]) {
        cubes[color] = count;
      }
    });
  });

  const power = cubes['red'] * cubes['green'] * cubes['blue'];

  sum2 += power
});

console.log(sum2) // 84911