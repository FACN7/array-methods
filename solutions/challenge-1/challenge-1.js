//CHALLENGE 1

//Using only the reduce() method, convert this array of countries and populations to an object, where each key is the country name, and the value is the population.

var data = [
  {
    country: "China",
    pop: 1409517397
  },
  {
    country: "India",
    pop: 1339180127
  },
  {
    country: "USA",
    pop: 324459463
  },
  {
    country: "Indonesia",
    pop: 263991379
  }
];

var solution = data.reduce(function(obj, value, index) {
  obj[value.country] = value.pop;
  return acc;
}, {});

//   console.log(solution);
