// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Closure:
const parent = () => {
  console.log("This parent's name is John");

  const child = () => "This child's name is Joey"
  return child;
}

// console.log(child()); // Error

console.log(parent()); // Logs the parent, but doesn't give the child() string itself.

parent(); // Call the parent function and 'return child'

// console.log(child()); // child STILL doesn't exist.

console.log('\n') // New line

const joey = parent(); // Logs the parent's name, and STORES JOEY as child()

console.log(joey()); // NOW logs the child's name.
// This only works because the line above stored child as a value before we logged it.

console.log('\n');



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  increment = 0; //Set initial value

  //Create a new function:
  const counting = () => {

    // New function increments the value
    return ++increment;
  }
  // Return the new function.
  return counting;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// This first const sets increment = 0. After that, realCounter ONLY equals the new function
const realCounter = counter();

//Everytime we call realCounter, it uses the counting function and keeps incrementing by 1.
console.log(realCounter());
console.log(realCounter());
console.log(realCounter());
console.log(realCounter());



console.log('\n');

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const count0 = {
    increment: () => ++count,
    decrement: () => --count,
  }
  return count0;
};

console.log('\n');

// countMe is now the new object, and it can be used as methods (see below)
const countMe = counterFactory();

// console.log(count); // Initial count, starts over at 0.
console.log(countMe.increment()); // Increment
// console.log(count); // Count went up by one
countMe.decrement();
countMe.decrement();
console.log(countMe.decrement()); // Decrease thrice
// console.log(count); // --> -2