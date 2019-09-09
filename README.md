# .map(), .filter(), .reduce(), .forEach()

## Map

The `map()` method is used to apply a function on every element in an array. A new array is then returned.
The index argument is optional.

### When to use?
**When you want to *transform* elements in an array** without messing with the original array.

### Syntax
```js
let newArr = oldArr.map(function(value, index) {
  // return element to new Array
});
```

eg:
```js 
let arr = [1,2,3,4]
let newArr = arr.map(function(value) {
  if (value % 2 === 0){
    return value * 2;
  } else {
    return value;
  }
});

```
What does newArr look like?

---
## Filter

The `filter()` method returns a new array created from all elements that pass a certain test preformed on an original array. The index argument is optional.

### When to use?
**When you want to *filter* out elements in an array**

### Syntax
```js
let newArr = oldArr.filter(function(value, index) {
  return // expression that evaluates to true or false
  // function should return true or false
  // true means keep the element
  // false means discard the element
});
```

eg:
```js 
let data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  }
]

let newArr = data.filter(function(value) {
  return value.population > 500000000
});

```
What does newArr look like?

---
## Reduce

The `reduce()` method is used to apply a function to each element in the array to reduce the array to a single value (which could be any thing such as string/number/object...).


### When to use?
**When you want to derive a *single* value out of an array**

### Syntax
This time the callback (function argument) function takes 4 arguments, the **accumulator** as well as the value, index and arr.

As well as the callback as with forEach,map & filter, reduce also takes an initial value for the accumulator. If you do not pass an initial value the 0th element of the array is used.

```js
let newArr = oldArr.reduce(function(accumulator, value, index) {
  // return the new value of the accumulator
}, initValue);
```

eg:
```js 
let arr = [1,2,3,4];

let value = arr.reduce(function(accumulator, value) {
  return accumulator - value;
}, 100);

```
What is the value?

---

## For Each

### When to use?
**When you need to execute a function on each element in an array and CANNOT use another method.** Normally one of the other methods will do for manipulating arrays/data. forEach is more commonly used if you want to do something external to your JS - eg: creating DOM nodes, making requests.

- Loops over each element in an array
- nothing is returned, is used to **execute a function on each element**

```js
var array = [1,2,3];
array.forEach(function(element){
  console.log(element);
});
```

---
## Challenge instructions

1. Click on the green 'Clone or download' button and copy the link for this repo

![how to clone a repo](https://www.stevejgordon.co.uk/wp-content/uploads/2018/01/CloneOrDownloadGitHub.png)

2. Open your terminal, navigate to an empty folder on your laptop, and run the command `git clone [repo link]` to clone this repo.

3. Open the cloned repo in your code editor and follow the instructions inside each folder's `challenge-x.js` file. 

You can run your code by opening the appropriate `index.html` file in your web browser.
