// Advanced Arrays

// (old way)
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
	double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

// .map loops over each element in array and returns new array
// without having to first declare a new empty array or
// a line saying .push! Stores result in mapArray (new const)
const mapArray = array.map(num => num * 2);

console.log('map', mapArray);


// filter
// same as map but filters (only if num > 5 in this case)
// would the value be added to the array

const filterArray = array.filter(num => num > 5);

console.log("filter", filterArray);


// reduce 
// accumulator is something that can store the information that happens
// in the body of the function
// 0 specifies accumulator starting value

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0);

console.log("reduce", reduceArray); // this returns 29 (sum of array)





