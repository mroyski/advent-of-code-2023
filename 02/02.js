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

let sum = 0;

input.forEach((line) => {
  let validGame = true;
  const game = parseInt(line.split(' ')[1].split(':')[0]);
  //   console.log('Game: ', game);

  const cubeMax = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const games = line.split(':')[1].split(';');
  //   console.log(games);

  games.forEach((g) => {
    const pull = g.split(',');

    pull.forEach((p) => {
      count = parseInt(p.split(' ')[1]);
      color = p.split(' ')[2];

      if (count > cubeMax[color]) {
        // console.log('too many dice!');
        validGame = false;
      }
    });
  });

  if (validGame) sum += game;
});

console.log(sum);
