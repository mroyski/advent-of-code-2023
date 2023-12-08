const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', (err, data) => {
  if (err) {
    throw err;
  }

  return data;
});

input = input.toString().split('\n');

const ranks = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const hands = [];
input.forEach((h) => {
  hands.push(h.split(' '));
});

// get rank of each hand
for (let h = 0; h < hands.length; h++) {
  let temp = {};
  let hand = hands[h][0];

  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];

    if (temp[card]) {
      temp[card] += 1;
    } else {
      temp[card] = 1;
    }
  }

  if (Object.keys(temp).length === 1) hands[h].push(7);
  else if (Object.keys(temp).length === 2) {
    if (
      Object.keys(temp).filter((k) => {
        return temp[k] === 4;
      }).length === 1
    ) {
      hands[h].push(6);
    } else hands[h].push(5);
  } else if (Object.keys(temp).length === 3) {
    if (
      Object.keys(temp).filter((k) => {
        return temp[k] === 3;
      }).length === 1
    ) {
      hands[h].push(4);
    } else hands[h].push(3);
  } else if (Object.keys(temp).length === 4) {
    hands[h].push(2);
  } else {
    hands[h].push(1);
  }
}

const sorted = hands.sort((a, b) => {
  aRank = a[2];
  bRank = b[2];

  if (aRank > bRank) {
    // console.log('a > b', aRank, bRank)
    return 1;
  } else if (bRank > aRank) {
    // console.log('a < b', aRank, bRank)
    return -1;
  } else {
    let aHand = a[0];
    let bHand = b[0];

    // console.log('aHand', a, 'bHand', b)
    for (let i = 0; i < aHand.length; i++) {
      if (ranks[aHand[i]] > ranks[bHand[i]]) {
        // console.log('a > b', 'i', i, 'aHand', aHand[i], 'bHand', bHand[i]);
        return 1;
      } else if (ranks[aHand[i]] < ranks[bHand[i]]) {
        // console.log('b > a', 'i', i, 'aHand', aHand[i], 'bHand', bHand[i]);
        return -1;
      }
    }
    return 0;
  }
});

let result = 0;
for (let i = 0; i < sorted.length; i++) {
  result += parseInt(sorted[i][1]) * (i + 1);
}

console.log(result); // 247961593

