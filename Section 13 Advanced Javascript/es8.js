// string padding...
'Turtle'.padStart(10) // including Turtle, will have 10 spaces, extra added to front
.padEnd() // including Turtle, will have 10 spaces, extra added to end


// useful when you have large parameter list, ending comma is valid
const fun = (
	a,
	b,
	c,
	d,
	) => {
	console.log(a);
}

fun(1,2,3,4,)


// object values/entries
Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudoplh',
	username2: 'Mr.Grinch'
}

// old way using keys
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

// new way, this will get you value of each object
Object.values(obj).forEach(value => {
	console.log(value);
})

// new way, gets you key and value
Object.entries(obj).forEach(value => {
	console.log(value);
})


// this retursn Santa0, Rudolph1, Mr.Grinch2
Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})


// Async Await <- this will come in seperate video







