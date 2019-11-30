// What is a program?
// -Has to allocate memory
// -Has to parse and execute scripts (read and run commands)

// -V8 Engine (in chrome) reads the js that we write and changes into
// machine executable instructions for the browers
// 	-Engine consists of:
// 		-Memory heap
// 			-This is where memory allocation happens
			// Memory Leak
			// -With all memory, we have a limited amount
			// -By increasing the amount of variables we have, memory leaks happens
			// -By having unused memories just laying around, the memory heap fills up
// 		-Call Stack
// 			-This is where code is read and executed
			console.log('1');
			console.log('2');
			console.log('3');
			// takes first line, adds to call stack, executes
			// takes second line, adds to call stack, executes, etc..


const a = 1; // we've just allocated memory!


// Javascript is a single threaded language that can be non-blocking
	// Single threaded means it has only one call stack
		// It can only do one thing at a time, following the call stack
		// Other languages can have multiple call stacks (multi threaded)
			// With multi-threaded, you can have issues with deadlocks
	// Non-blocking

// Synchronous means one by one in development, it is predictable but 
// can get slow...
console.log('1');
console.log('2');
console.log('3');

// Asynchronous
console.log('1');
setTimeout(() => {
	console.log('2');
}, 2000)
console.log('3');

// Stack overflow - call stack gets bigger and bigger until no more space
// Recursion: function that calls itself
function foo() {
	foo()
}

foo()

// Javascript Run-Time Environment
// indluded in the browser..
// Includes 
// 1) Web APIs
//	-DOM (document)
//	-AJAX (XMLHttpRequest)
//	-Timeout(setTimeout - this is part of run-time env, not javascript (technically))
// 2) Callback Queue (onClick, onLoad, onDone)
// 3) Event Loop

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP