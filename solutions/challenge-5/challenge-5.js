// CHALLENGE 5

// Use the forEach array method to log an x amount of stars * where there's an x in the array, for example:

var arr = [1, 2, 3, 1];
// should log
// *
// **
// ***
// *

arr.forEach(number => {
  console.log("*".repeat(number));
});
