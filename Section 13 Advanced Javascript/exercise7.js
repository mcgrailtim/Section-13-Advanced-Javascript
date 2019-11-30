// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John'); // false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const byOneHundred = (x) => x**100;



// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
byOneHundred(10000) // result is infinity, why? see below

// The MAX_VALUE property returns the largest number possible in JavaScript. 
// This static property has a value of 1.7976931348623157e+308. 
// Note: Numbers larger than MAX_VALUE are represented as infinity.

