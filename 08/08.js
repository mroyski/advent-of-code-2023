const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

const steps = input[0].split('');
const hash = {};

const temp = input.slice(2, input.length);
let counter = 1;
let starter;
temp.forEach((d) => {
  const key = d.split(' =')[0];
  const left = d.split('(')[1].slice(0, 3);
  const right = d.split(', ')[1].slice(0, 3);

  // hash[key] = { L: left, R: right };
  hash[key] = [left, right];
});
console.log(hash);

let count = 0;
let current = 'AAA';

while (current !== 'ZZZ') {
  let step = steps[count % steps.length];

  if (step === 'L') {
    let position = hash[current][0];
    current = position
    console.log(position)
    // console.log('new: position', position)
  } else {
    let position = hash[current][1];
    current = position
    // console.log('new: position', position)
  }
  count += 1;
  console.log(count)
}

console.log(count) // 17263