const upperCaser = (input) => {
  return input.split(" ").map(elem=>elem.toUpperCase()).join(" ");
};
    
module.exports = upperCaser;
