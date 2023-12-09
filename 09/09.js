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

  for (let x = 0; x < input.length; x++) {
    let allZeros = false;
    let index = 0;
    let nums = [input[x].split(' ').map((n) => parseInt(n))];

    while (!allZeros) {
      nums.push([]);

      for (let i = 0; i < nums[index].length - 1; i++) {
        let difference = nums[index][i + 1] - nums[index][i];
        nums[index + 1].push(difference);
      }

      let check = nums[index + 1].filter((n) => {
        return n === 0;
      });

      if (check.length === nums[index + 1].length) {
        allZeros = true;
      }

      index += 1;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
      if (i === nums.length - 1) {
        nums[i].push(0);
        continue;
      } else {
        let last = nums[i][nums[i].length - 1];
        let prevLast = nums[i + 1][nums[i + 1].length - 1];

        nums[i].push(last + prevLast);
      }
    }

    sum += nums[0][nums[0].length - 1];
  }

  console.log('result', sum); 
};

const part2 = () => {
    let sum = 0;
  
    for (let x = 0; x < input.length; x++) {
      let allZeros = false;
      let index = 0;
      let nums = [input[x].split(' ').map((n) => parseInt(n)).reverse()];
  
      while (!allZeros) {
        nums.push([]);
  
        for (let i = 0; i < nums[index].length - 1; i++) {
          let difference = nums[index][i + 1] - nums[index][i];
          nums[index + 1].push(difference);
        }
  
        let check = nums[index + 1].filter((n) => {
          return n === 0;
        });
  
        if (check.length === nums[index + 1].length) {
          allZeros = true;
        }
  
        index += 1;
      }
  
      for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
          nums[i].push(0);
          continue;
        } else {
          let last = nums[i][nums[i].length - 1];
          let prevLast = nums[i + 1][nums[i + 1].length - 1];
  
          nums[i].push(last + prevLast);
        }
      }
  
      sum += nums[0][nums[0].length - 1];
    }
  
    console.log('result', sum); 
  };
part1(); // 1953784198
part2(); // 957