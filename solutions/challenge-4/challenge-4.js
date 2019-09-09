// CHALLENGE 4

// You have learned that you can map an array and square every element in it. Implement the same functionality with reduce instead of map.

var arr = [1, 2, 3, 4];

var solution = arr.reduce(function(acc, value, index) {
  acc.push(value * value);
  return acc;
}, []);

console.log(solution);
