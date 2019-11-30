// Do not pollute the global name space
// Code reusability is important
// Dependency Resolution - need to add lines in proper order

// IIFE
var myApp = {}

(function(){
	myApp.add = function(a, b) {
		return a + b;
	}
})();


// CommonJS + Browserify
// first js file
module.exports = function add(a, b) {
	return a + b;
}

// second js file
var add = require('./add');


// ES6 + Webpack2
// first js file
export const add = (a, b) => a + b;
// or
export default function add() {
	return a + b;
}

// second js file
import { add } from './add';
// or
import add from './add';



