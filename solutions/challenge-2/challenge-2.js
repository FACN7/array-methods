// CHALLENGE 2

//Using Object.keys() (look it up :D) and one of the other array methods, do the reverse of challenge 1. That is, convert your object of countries into an array that looks like the original array in Challenge 1.

var data = {
  China: 1409517397,
  India: 1339180127,
  USA: 324459463,
  Indonesia: 263991379
};

var solution = Object.keys(data).map(function(item) {
  return { country: item, pop: data[item] };
});

console.log(solution);
