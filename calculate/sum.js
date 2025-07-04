// modules  protects their functions and variables from leaking
//  if we want to use functions and variables in other module we need to export it using module.exports

function calculateSum(a, b) {
  console.log(a + b);
}

module.exports = {
  calculateSum: calculateSum,
};
