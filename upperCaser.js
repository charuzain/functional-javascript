/* Task

Write a function that takes an input string and returns it uppercased.

## Arguments

input: a String of random words (lorem ipsum) */

const upperCaser = (input) => {
  return input.split(" ").map(elem=>elem.toUpperCase()).join(" ");
};
    
module.exports = upperCaser;
