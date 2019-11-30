// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };


// context vs. scope
// this refers to what object it is inside of

const object4 = {
	a: function() {
		console.log(this);
	}
}

// instantiation
// make a copy of the object and reuse the code
class Player { // think of a class as something I want to make a copy of
	constructor(name, type) {
		console.log("player", this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
} 

// this says the Wizard class will add on top of whatever Player has
class Wizard extends Player {
	// a class always has a constructor!
	constructor(name, type) {
		// when you extend a class, have to use super to have access to
		// arguments from what you're extending from!
		super(name, type)
		console.log("wizard", this);
	}
	play() {
		console.log(`Wheeeee I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Lebron', 'Dark Magic');










