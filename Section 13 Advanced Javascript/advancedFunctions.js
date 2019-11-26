// Closures - a function ran, the function executed. It's
// never going to execute again.
// BUT it's going to remember that there are references to those variables,
// so the child scope always has access to the parent scope.

const first = () => {
	const greet = "Hi";
	const second = () => {
		const name = "bobby";
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();


// Currying - Process of converting a function that takes mulitple
// arguments into a function that takes them one at a time.
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyBy5 = curriedMultiply(5);


// Compose
const compose = (f, g) => (a) => f(g(a));
// this is basically (sum, sum) => (5) => sum(sum(5))
// sum(sum(5)) equates to sum(6) then 7

const sum = (num) => num + 1;

compose (sum, sum)(5);


// Avoiding Side Effects, functional purity.

var a = 1;
function b() {
	a = 2; // this is a side effect! Something the function is doing to effect the outside world
}

//Deterministic - no matter what, if my inputs go through a function,
// the return value will always be the same.