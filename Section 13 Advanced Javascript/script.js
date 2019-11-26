// Advanced Arrays

// (old way)
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log('forEach', double);



// map, filter, reduce

// .map loops over each element in array and returns new array
// without having to first declare a new empty array or
// a line saying .push! Stores result in mapArray (new const)
const mapArray = array.map((num) => {
	return num * 2
});

console.log('map', mapArray);