// Destructuring

// const obj = {
// 	player: 'bobby',
// 	experience: 100,
// 	wizardLevel: false
// }

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// these two below are exact same as the 3 above!
// const { player, experience } = obj;
// let { wizardLevel } = obj;


// object properties

// const name = "john snow";

// const obj = {
// 	[name]: "hello"
// 	[1 + 2]: 'hihi'
// }



// Template strings

// const name = "Sally";
// const age = 34;
// const pet = "horse";

// const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;


// default arguments <-- super cool!
// function greet(name ='', age=30, pet='cat'){
// 	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
// }


// Symbol
// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');


// arrow functions (no need for a "return"!)
// const add = (a, b) => a + b;

// another arrow function example
// const whereAmI = (username, location) => {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }