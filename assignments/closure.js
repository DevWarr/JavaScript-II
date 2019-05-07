// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Closure:
const parent = () => {
  console.log("This parent's name is John");

  const child = () => "This child's name is Joey"
  return child;
}

// console.log(child()); // Error

console.log(parent()); // console.logs the parent, but doesn't give the child() string.

parent(); // Call the parent function and 'return child'

// console.log(child()); // child STILL doesn't exist.

console.log('\n') // New line

const joey = parent(); // Logs the parent's name, and STORES JOEY as child()

console.log(joey()); // NOW logs the child's name.
// This only works because the line above stored child as a value before we logged it.





/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
