// CHALLENGE 3

// Using only the reduce method, calculate the sum of all sub-arrays in this array. The sum result should be 27.

var arr = [[1, 2, 3], [1, 2, 3], [4, 5, 6]];

var solution = arr.reduce(function(acc, value, index) {
  return (
    acc +
    value.reduce(function(a, b) {
      return a + b;
    })
  );
}, 0);

console.log(solution);
