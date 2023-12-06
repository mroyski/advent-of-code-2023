const fs = require('fs');

let input = fs.readFileSync(__dirname + '/example.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

const part1 = () => {
  const chunks = {};

  input = input.toString().split('\n\n');
  input.forEach((s) => {
    let key = s.split(':')[0];
    chunks[key] = [];
    let lines = s.split(':')[1].split('\n');

    if (key === 'seeds') {
      chunks[key] = lines[0].split(' ').filter((n) => n);
    } else {
      lines.forEach((line) => {
        if (line !== '') {
          chunks[key].push(line);
        }
      });
    }
  });

  // console.log(chunks);

  const final = {};

  const seeds = chunks['seeds'].map((s) => parseInt(s));
  seeds.forEach((seed) => {
    let s = seed;

    for (k in chunks) {
      if (k === 'seeds') continue;

      let m = chunks[k];
      let changed = false;

      m.forEach((m) => {
        n = m.split(' ');
        const dest = parseInt(n[0]);
        const source = parseInt(n[1]);
        const range = parseInt(n[2]);

        const maxsource = source + range;
        if (s >= source && s <= maxsource && !changed) {
          s = s + (dest - source);
          changed = true;
        }
      });
      final[seed] = s;
    }
  });

  let max = 0;
  for (k in final) {
    if (final[k] > max) {
      max = final[k];
    }
  }

  let min = max;
  for (k in final) {
    if (final[k] < min) {
      min = final[k];
    }
  }

  // console.log('final: ', final);
  console.log('max: ', max);
  console.log('min: ', min);
};

const part2 = () => {
  const chunks = {};

  input = input.toString().split('\n\n');
  input.forEach((s) => {
    let key = s.split(':')[0];
    chunks[key] = [];
    let lines = s.split(':')[1].split('\n');

    if (key === 'seeds') {
      chunks[key] = lines[0].split(' ').filter((n) => n);
    } else {
      lines.forEach((line) => {
        if (line !== '') {
          chunks[key].push(line);
        }
      });
    }
  });

  // console.log(chunks);

  const final = {};
  const ranges = [];

  const seeds = chunks['seeds'].map((s) => parseInt(s));
  for (let i = 0; i < seeds.length; i += 2) {
    ranges.push([seeds[i], seeds[i + 1]]);
  }
  console.log(ranges);
  seeds.forEach((seed) => {
    let s = seed;

    for (k in chunks) {
      if (k === 'seeds') continue;

      let m = chunks[k];
      let changed = false;

      m.forEach((m) => {
        n = m.split(' ');
        const dest = parseInt(n[0]);
        const source = parseInt(n[1]);
        const range = parseInt(n[2]);

        const maxsource = source + range;
        if (s >= source && s <= maxsource && !changed) {
          s = s + (dest - source);
          changed = true;
        }
      });
      final[seed] = s;
    }
  });

  let max = 0;
  for (k in final) {
    if (final[k] > max) {
      max = final[k];
    }
  }

  let min = max;
  for (k in final) {
    if (final[k] < min) {
      min = final[k];
    }
  }

  // console.log('final: ', final);
  console.log('max: ', max);
  console.log('min: ', min);
};
// part1(); // 579439039
part2();
